from pykakasi import kakasi


def kana_to_romaji_pykakasi(kana_input):
    """
    Converts Japanese Kana to Romaji using pykakasi.

    Args:
        kana_input (str): The Kana string to convert.

    Returns:
        str: The Romaji representation of the input Kana.
    """
    kks = kakasi()
    kks.setMode("H", "a")  # Hiragana to ASCII (Romaji)
    kks.setMode("K", "a")  # Katakana to ASCII (Romaji)
    kks.setMode("J", "a")  # Kanji to ASCII (Romaji - won't convert Kanji to Romaji without furigana)
    conv = kks.getConverter()
    return conv.do(kana_input)


if __name__ == "__main__":
    print("这是一个将日文假名转换为罗马字的程序 (使用 pykakasi)。")
    print("输入'退出'来结束程序。")

    while True:
        user_input = input("请输入假名：")
        if user_input.lower() == '退出':
            print("程序已退出。")
            break

        try:
            romaji_output = kana_to_romaji_pykakasi(user_input)
            print(romaji_output)
        except Exception as e:
            print(f"转换出错: {e}")
            print("请确保输入的是有效的日文假名。")