import pymysql


def get_commection():
    return pymysql.connect(
        host=' 127.0.0.1',
        port= 3306,
        user='root',
        password= 'admin',
        database= 'cheems'


    )