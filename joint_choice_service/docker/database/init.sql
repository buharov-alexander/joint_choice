CREATE SEQUENCE public.id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


CREATE TABLE public.movies (
    id integer DEFAULT nextval('public.id_seq'::regclass) NOT NULL,
    tmdb_id integer,
    title character varying(80),
    original_title character varying(80),
    description text,
    poster_path character varying(80)
);


ALTER TABLE ONLY public.movies
    ADD CONSTRAINT films_pkey PRIMARY KEY (id);

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT films_tmdb_id_unique UNIQUE (tmdb_id);
