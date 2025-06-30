import urllib.parse


def url_encode_chinese():
    """
    接收用户输入的中文，并输出其 UTF-8 百分号编码，
    然后将编码后的内容固定格式为 "/students/encoded_output"。
    程序会持续运行直到用户选择退出。
    """
    print("欢迎使用 URL 中文编码器！")
    print("输入 'exit' 或 'q' 退出程序。")

    while True:
        user_input = input("\n请输入需要编码的中文内容：")

        if user_input.lower() in ('exit', 'q'):
            print("感谢使用，程序已退出。")
            break

        encoded_output = urllib.parse.quote(user_input)
        # --- 修改开始 ---
        # 将编码后的内容固定格式为 "/students/encoded_output"
        formatted_output = f'"/students/{encoded_output}"'
        # --- 修改结束 ---
        print(f"{formatted_output}")


if __name__ == "__main__":
    url_encode_chinese()