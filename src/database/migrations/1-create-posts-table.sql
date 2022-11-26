CREATE TABLE posts (
  id uuid NOT NULL,
  name character varying(255) NOT NULL,
  description text NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT posts_pkey PRIMARY KEY (id)
)
