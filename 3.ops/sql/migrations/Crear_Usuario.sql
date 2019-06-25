-- Drop table

DROP TABLE IF EXISTS public.bsb_user;

CREATE TABLE public.bsb_user (
	id bigserial NOT NULL,
	code varchar(50) NULL,
	"password" varchar(250) NULL,
	CONSTRAINT bsb_user_pkey PRIMARY KEY (id)
);
