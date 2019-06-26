database="bodeguita"

if [ "$( psql -tAc "SELECT 1 FROM pg_database WHERE datname='$database'" )" = '1' ]
then
    psql -U postgres -c "drop database $database"
fi

psql -f Crear_BaseDatos.sql 
psql -d $database -c "create schema IF NOT EXISTS public"
psql -d $database -f Crear_Producto.sql
psql -d $database -f Crear_Usuario.sql
psql -d $database -f Insertar_Producto.sql
psql -d $database -f Insertar_Usuario.sql
