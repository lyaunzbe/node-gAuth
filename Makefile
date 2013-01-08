REPORTER = spec

test:
	@NODE_ENV=test mocha \
		--reporter $(REPORTER) \
		--timeout 20000

test-w:
	@NODE_ENV=test mocha \
		--reporter $(REPORTER) \
		--timeout 20000 \
		--watch



.PHONY: test test-w
