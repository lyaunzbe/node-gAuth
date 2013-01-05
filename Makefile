REPORTER = spec

test:
	@NODE_ENV=test mocha \
		--reporter $(REPORTER) \
		--timeout 8000

test-w:
	@NODE_ENV=test mocha \
		--reporter $(REPORTER) \
		--timeout 8000 \
		--watch



.PHONY: test test-w
