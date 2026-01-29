import asyncio

from aiogram import Bot, Dispatcher, types
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, WebAppInfo, Message
from  aiogram.filters import Command

bot = Bot('8184259150:AAGwXGkIXmpyiIeEQna_sMEfkUoWLtpO6hE')
dp = Dispatcher(bot)


@dp.message(Command("start"))
async def start(message: types.Message):
    markup = ReplyKeyboardMarkup(
        keyboard=[
            [
                KeyboardButton(
                    text="Открыть мини аппку",
                    web_app=WebAppInfo(
                        url="https://vovabutko09-pixel.github.io/index.html"
                    )
                )
            ]
        ],
        resize_keyboard=True
    )

    await message.answer("Привет!", reply_markup=markup)

async def main():
    await dp.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())
