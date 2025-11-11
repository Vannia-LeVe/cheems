from persistence.db import get_commection

class Winner:
    def _init_(self,id,name,email):
        self.id=id
        self.name=name
        self.email=email

    def save(self):
        connection= get_commection ()
        cursor= connection.cursor()

        #consulta parametrizados
        query= "INSERT INTO winners(name, email) VALUES(%s, %s)"
        cursor.execute(query,(self.name, self.email))