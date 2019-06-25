-- Drop table

DROP TABLE IF EXISTS public.bsb_product;

CREATE TABLE public.bsb_product (
	id bigserial NOT NULL,
	"categoryId" int4 NULL,
	"name" varchar(50) NULL,
	quantity numeric NULL,
	price numeric NULL,
	nationality varchar(50) NULL,
	"type" varchar(50) NULL,
	discount bool NULL,
	CONSTRAINT bsb_product_pkey PRIMARY KEY (id)
);
