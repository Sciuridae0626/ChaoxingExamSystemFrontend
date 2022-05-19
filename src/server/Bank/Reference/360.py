# import re
# from pprint import pprint
import sys
# import urllib
import urllib.request
# import numpy as np
import requests
from bs4 import BeautifulSoup
# from urllib.parse import unquote, quote
# from tqdm import tqdm
import time
import os
import random
# 模拟浏览器访问
# from tqdm import tqdm

Headers = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'
def get_html(url):
    try:
        html = requests.get(url,Headers).content
    except Exception as e:
        print('web requests url error: {}\nlink: {}'.format(e, url))
    return html


class WebDownloader(object):

    def __init__(self, base_url):
        self.url = base_url
        self.links = set()
        self.names = ""
    # 下载界面的获取
    def parse_html(self):
        html = get_html(self.url)
        soup = BeautifulSoup(html,'lxml')
        # print(soup)
        for link in soup.findAll('a'):
            if link.has_attr('href'):
                href = str(link.get('href'))
                if href.startswith('/d'):
                    self.links.add(href)

    # 下载链接的获取
    def parse_html_again(self):
        html = get_html(self.url)
        x = self.url.split('/')[4]
        time.sleep(random.randint(0, 1))
        soup = BeautifulSoup(html,'lxml')
        for link in soup.findAll('img'):
            if link.has_attr('src'):
                src = str(link.get('src'))
                if src.endswith('.png') and src.find('ssl')==-1:
                    self.links.add(src)
        tests = requests.session()
        headers = {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Content-Length': '49',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'https://wenku.so.com',
            'Referer': 'https://wenku.so.com/d/e82e0a98b298cc7dc21c3e12f7f1256e',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest'
        }
        tests.headers.update(headers)
        data = {
            'id': x,
            'start': '2',
            'end': '5'
        }
        url = 'https://wenku.so.com/api/detail/data'
        req = tests.post(url=url, data=data)
        a = req.json()
        # print(x,a)
        if(a['errno']!=1402):
            self.links.add(a['data']['list']['2'])
            self.links.add(a['data']['list']['3'])
            a = os.path.exists(sys.argv[1]+'/'+x)
            if not a:
                # z = os.getcwd()
                os.mkdir(sys.argv[1]+'/' + x)
                self.names=x

    #下载
    def download(self):
        num=1
        for link in self.links:
            link = str(link)
            try:
                r = requests.get(link,Headers)
                flags = os.path.exists(sys.argv[1]+'/'+self.names + '/'+str(num)+'.png')
                if not flags:
                    with open(sys.argv[1]+'/'+self.names + '/'+str(num)+'.png', 'wb+') as g:
                        g.write(r.content)
                        num+=1
            except Exception as e:
                print('Downloading error:{}\nlink:{}'.format(e, link))

if __name__ == '__main__':
    url = 'https://wenku.so.com/s?q='+urllib.request.quote(sys.argv[1].encode('utf-8'))+'&pn=1'
    # print(url)
    is_py = os.path.exists(sys.argv[1])
    if not is_py:
        os.mkdir(sys.argv[1])
    wd = WebDownloader(url)
    wd.parse_html()
    for links in wd.links:
        # print(links)
        ws=WebDownloader("https://wenku.so.com"+links)
        ws.parse_html_again()
        ws.download()


