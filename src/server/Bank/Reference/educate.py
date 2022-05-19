import requests
import base64
import os
import sys
import shutil
"""定义常量（写自己注册后百度发给你的）"""
APP_ID = '25264941'
API_KEY = 'F0EtPaBh5y4x5vSnh9STUT2i'
SECRET_KEY = 'VCYt1OccfOXYwcRHleu8EgT7dITqiOMv'
'''
文档版面分析与识别
'''
host = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='+API_KEY+'&client_secret='+SECRET_KEY
response = requests.get(host)
if response:
    access_token = response.json()['access_token']
request_url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic"
files = os.listdir(sys.argv[1])
for file in files:
    files_fur = os.listdir(sys.argv[1]+'/'+file)
    string_text = ""
    for file_fur in files_fur:
        # 二进制方式打开图片文件
        f = open(sys.argv[1]+'/' + file + '/'+file_fur, 'rb')
        img = base64.b64encode(f.read())
        params = {"image": img}
        request_url = request_url + "?access_token=" + access_token
        headers = {'content-type': 'application/x-www-form-urlencoded'}
        response = requests.post(request_url, data=params, headers=headers)
        if response:
            # print(response.json())
            # print(type(response.json()))
            if 'error_code' not in response.json():
                # print(response.json())
                for i in response.json()['words_result']:
                    string_text += i['words']
                    string_text += '\n'
                    # print(i['words']['word'])
                string_text += '\n\n'
    print(string_text)
shutil.rmtree(sys.argv[1])