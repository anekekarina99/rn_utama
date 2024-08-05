# NPM COMMAND

# run android development debug
andro_dev:
	npm run android:dev

# run android development stag
andro_stag:
	npm run android:stag

# run android production debug
andro:
	npm run android

# Build apk android production release
apk:
	npm run build:android:release
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	${MAKE} open_generated_apk
	@echo "Build production release apk successfull"

# Build apk android development release
apk_dev:
	npm run build:android:dev
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	${MAKE} open_generated_apk_dev
	@echo "Build development release apk successfull"
	
# Build apk android staging release
apk_stag:
	npm run build:android:stag
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	${MAKE} open_generated_apk_stag
	@echo "Build staging release apk successfull"

# Build apk android production debug
apk_debug:
	npm run build:android:production:debug
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	${MAKE} open_generated_apk
	@echo "Build production debug apk successfull"

# Build apk android development debug
apk_dev_debug:
	npm run build:android:dev:debug
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	${MAKE} open_generated_apk_dev
	@echo "Build development debug apk successfull"

# Build apk android staging debug
apk_stag_debug:
	npm run build:android:stag:debug
	mkdir -p ./generated_apk && cp -r ./android/app/build/outputs/apk/ ./generated_apk
	${MAKE} open_generated_apk_stag
	@echo "Build staging debug apk successfull"

# Build aab android production release
aab:
	npm run bundle:android:release
	@echo "Build production release aab successfull"

# Build aab android development release
aab_dev:
	npm run bundle:android:dev
	@echo "Build development release aab successfull"

# Build aab android staging release
aab_stag:
	npm run bundle:android:stag
	@echo "Build staging release aab successfull"

# install
install:
	npm install --legacy-peer-deps

# start
start:
	npm start

# reset
reset:
	npm run reset

# open generated apk dev
open_generated_apk_dev:
#	open ./generated_apk/development

# open generated apk stag
open_generated_apk_stag:
#	open ./generated_apk/staging

# open generated apk prod
open_generated_apk:
#	open ./generated_apk/production




# GIT COMMAND
pull_origin:
	git pull origin

merge_development:
	git merge origin/development

merge_production:
	git merge origin/production
	

# GENERAL COMMANDs
menu:
	@echo "###################################"
	@echo "List Menu : "
	@echo "1. npm install"
	@echo "2. npm start"
	@echo "3. npm reset"
	@echo "4. run android production"
	@echo "5. run android development"
	@echo "6. run android staging"
	@echo "7. build apk production release"
	@echo "8. build apk development release"
	@echo "9. build apk production debug"
	@echo "10. build apk development debug"
	@echo "11. build aab production"
	@echo "12. build aab development"
	@echo "13. build aab staging"
	@echo "14. build apk staging release"
	@echo "15. build apk staging debug"
	@echo "###################################"
	@read -p "Enter a value: " USER_INPUT && \
    if [ "$$USER_INPUT" -eq 1 ]; then \
        ${MAKE} install; \
    fi; \
	if [ "$$USER_INPUT" -eq 2 ]; then \
        ${MAKE} start; \
    fi; \
	if [ "$$USER_INPUT" -eq 4 ]; then \
        ${MAKE} andro; \
    fi; \
	if [ "$$USER_INPUT" -eq 3 ]; then \
        ${MAKE} reset; \
    fi; \
	if [ "$$USER_INPUT" -eq 5 ]; then \
        ${MAKE} andro_dev; \
    fi; \
	if [ "$$USER_INPUT" -eq 6 ]; then \
        ${MAKE} andro_stag; \
    fi; \
	if [ "$$USER_INPUT" -eq 7 ]; then \
        ${MAKE} apk; \
    fi; \
	if [ "$$USER_INPUT" -eq 8 ]; then \
        ${MAKE} apk_dev; \
    fi; \
	if [ "$$USER_INPUT" -eq 9 ]; then \
        ${MAKE} apk_debug; \
    fi; \
	if [ "$$USER_INPUT" -eq 10 ]; then \
        ${MAKE} apk_dev_debug; \
    fi; \
	if [ "$$USER_INPUT" -eq 11 ]; then \
		${MAKE} install; \
        ${MAKE} aab; \
    fi; \
	if [ "$$USER_INPUT" -eq 12 ]; then \
		${MAKE} install; \
        ${MAKE} aab_dev; \
    fi; \
	if [ "$$USER_INPUT" -eq 13 ]; then \
		${MAKE} install; \
        ${MAKE} aab_stag; \
    fi; \
	if [ "$$USER_INPUT" -eq 14 ]; then \
        ${MAKE} apk_stag; \
    fi; \
	if [ "$$USER_INPUT" -eq 15 ]; then \
        ${MAKE} apk_stag_debug; \
    fi; \

git_menu:
	@echo "###################################"
	@echo "List Git Menu : "
	@echo "1. Pull origin"
	@echo "2. Merge from development to current branch"
	@echo "3. Merge from production to current branch"
	
	@echo "###################################"
	@read -p "Enter a value: " USER_INPUT && \
    if [ "$$USER_INPUT" -eq 1 ]; then \
		${MAKE} pull_origin; \
    fi; \
    if [ "$$USER_INPUT" -eq 2 ]; then \
		${MAKE} pull_origin; \
        ${MAKE} merge_development; \
    fi; \
    if [ "$$USER_INPUT" -eq 3 ]; then \
		${MAKE} pull_origin; \
        ${MAKE} merge_production; \
    fi; \

test: 
	@echo "HALOOOO LAGII"
test2: 
	@echo "HALOOOO 2"
