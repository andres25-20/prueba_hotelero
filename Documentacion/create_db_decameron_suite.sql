-- Database: decameron_suite
CREATE DATABASE decameron_suite
    WITH
    OWNER = postgres --usuario por defecto, de usar uno diferente modificarlo por el usuario en uso.
    ENCODING = 'UTF8'
    LC_COLLATE = 'es-ES'
    LC_CTYPE = 'es-ES'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;