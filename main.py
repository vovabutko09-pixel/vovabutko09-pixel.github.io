from aiogram import Bot, Dispatcher, executor, types
from aiogram.types.web_app_info import WebAppInfo

bot = Bot('8184259150:AAGwXGkIXmpyiIeEQna_sMEfkUoWLtpO6hE')
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: types.Message):
    markup = types.ReplyKeyboardMarkup()
    markup.add(types.KeyboardButton('Открыть мини аппку', web_app=WebAppInfo(url='https://vovabutko09-pixel.github.io/index.html')))
    await message.answer('Привет!', reply_markup=markup)


executor.start_polling(dp)
