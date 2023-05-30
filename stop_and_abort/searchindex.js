Search.setIndex({"docnames": ["developer/explanations/architecture", "developer/explanations/decisions", "developer/explanations/decisions/0001-record-architecture-decisions", "developer/explanations/decisions/0002-no-queues", "developer/explanations/decisions/0003-api-case", "developer/explanations/events", "developer/explanations/lifecycle", "developer/explanations/type_validators", "developer/how-to/build-docs", "developer/how-to/contribute", "developer/how-to/lint", "developer/how-to/make-release", "developer/how-to/run-tests", "developer/how-to/static-analysis", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "developer/tutorials/dev-install", "developer/tutorials/dev-run", "genindex", "index", "user/explanations/docs-structure", "user/how-to/configure-app", "user/how-to/run-cli", "user/how-to/run-container", "user/index", "user/reference/api", "user/reference/cli", "user/reference/messaging-spec", "user/reference/rest-spec", "user/tutorials/installation", "user/tutorials/quickstart"], "filenames": ["developer/explanations/architecture.rst", "developer/explanations/decisions.rst", "developer/explanations/decisions/0001-record-architecture-decisions.rst", "developer/explanations/decisions/0002-no-queues.rst", "developer/explanations/decisions/0003-api-case.rst", "developer/explanations/events.rst", "developer/explanations/lifecycle.rst", "developer/explanations/type_validators.rst", "developer/how-to/build-docs.rst", "developer/how-to/contribute.rst", "developer/how-to/lint.rst", "developer/how-to/make-release.rst", "developer/how-to/run-tests.rst", "developer/how-to/static-analysis.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "developer/tutorials/dev-install.rst", "developer/tutorials/dev-run.rst", "genindex.rst", "index.rst", "user/explanations/docs-structure.rst", "user/how-to/configure-app.rst", "user/how-to/run-cli.rst", "user/how-to/run-container.rst", "user/index.rst", "user/reference/api.rst", "user/reference/cli.rst", "user/reference/messaging-spec.rst", "user/reference/rest-spec.rst", "user/tutorials/installation.rst", "user/tutorials/quickstart.rst"], "titles": ["Architecture", "Architectural Decision Records", "1. Record architecture decisions", "2. No Queues", "2. API Model Case", "Events Emitted by the Worker", "Lifecycle of a Plan", "Type Validators", "Build the docs using sphinx", "Contributing to the project", "Run linting using pre-commit", "Make a release", "Run the tests using pytest", "Run static analysis using mypy", "Update the tools", "Developer Guide", "Standards", "Developer install", "Run/Debug in a Developer Environment", "API Index", "blueapi", "About the documentation", "Configure the application", "Control the Worker via the CLI", "Run in a container", "User Guide", "API", "Command-Line Interface", "Messaging Specification", "REST Specification", "Installation", "Quickstart Guide"], "terms": {"blueapi": [0, 5, 6, 7, 17, 18, 22, 23, 24, 28, 29, 30, 31], "perform": 0, "number": [0, 5, 6, 9, 11, 24, 26, 28], "task": [0, 3, 15, 27, 28, 29], "manag": 0, "blueski": [0, 5, 6, 7, 20, 28], "runengin": [0, 5, 6], "give": [0, 5], "instruct": [0, 17, 18], "handl": [0, 5, 9, 10], "its": [0, 6, 24, 28, 29, 30], "error": [0, 3, 5, 6, 12, 23, 28, 29], "tradition": [0, 5], "thi": [0, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 16, 17, 21, 22, 23, 26, 28, 29, 30], "job": 0, "ha": [0, 5, 7, 11, 14, 30], "been": [0, 30], "done": [0, 12, 13, 28], "human": [0, 5, 28], "an": [0, 3, 5, 6, 7, 8, 10, 14, 22, 28], "ipython": [0, 5], "termin": [0, 5, 17, 30], "so": [0, 4, 5, 7, 17, 30], "requir": [0, 6, 12, 17, 21, 27, 28, 30, 31], "autom": [0, 5], "maintain": 0, "registri": [0, 6, 24], "plan": [0, 4, 5, 7, 15, 20, 28, 29], "devic": [0, 6, 7, 23, 28, 29], "In": [0, 3, 5, 6, 23], "aforement": 0, "case": [0, 1, 5, 7, 17], "would": 0, "have": [0, 7, 9, 10, 15, 17, 18, 23, 31], "just": [0, 5, 10], "global": [0, 6], "variabl": [0, 6], "commun": 0, "outsid": [0, 5], "world": 0, "accept": [0, 2, 3, 4, 27, 29], "run": [0, 3, 5, 6, 8, 9, 14, 15, 16, 17, 25, 28, 29, 31], "provid": [0, 14, 28], "updat": [0, 15, 27, 29], "progress": [0, 28], "etc": [0, 5, 28], "These": [0, 5, 7, 17], "respons": [0, 3, 28, 29], "ar": [0, 3, 5, 6, 7, 8, 9, 12, 16, 18, 21, 22, 23, 24], "kept": [0, 3], "separ": 0, "codebas": 0, "ensur": [0, 12, 18], "clean": 0, "main": [0, 11, 24], "hold": [0, 3, 6], "well": [0, 6, 10, 28], "helper": 0, "method": [0, 7], "regist": [0, 6], "en": 0, "mass": 0, "from": [0, 2, 4, 5, 6, 7, 8, 15, 16, 18, 22, 23, 24, 25, 28, 30], "normal": 0, "python": [0, 4, 11, 14, 17], "modul": [0, 6, 14], "wrap": 0, "request": [0, 3, 7, 9, 14, 28, 29], "includ": [0, 4, 5, 6, 8, 25], "name": [0, 4, 5, 6, 7, 27, 28, 29], "dictionari": [0, 7], "paramet": [0, 4, 6, 7, 23, 27, 29], "pass": [0, 6, 7, 22, 23], "valid": [0, 15, 29], "against": [0, 6, 7, 12], "known": [0, 7, 28], "expect": [0, 7, 28], "ani": [0, 3, 4, 6, 7, 8, 9, 10, 14, 22, 27, 28, 30], "api": [0, 1, 3, 8, 16, 25, 27, 28], "layer": 0, "refer": [0, 6, 7, 21, 23, 26, 27, 31], "can": [0, 3, 5, 6, 7, 8, 9, 10, 12, 13, 17, 18, 22, 23, 28, 29, 30, 31], "interrog": 0, "messag": [0, 5, 6, 23, 25], "reciev": [0, 28], "bu": [0, 6, 28], "It": [0, 6, 12, 13, 23, 30], "also": [0, 5, 6, 7, 8, 9, 12, 15, 20, 23, 25, 30, 31], "forward": [0, 23], "variou": [0, 7, 28], "event": [0, 6, 15, 28], "gener": [0, 6, 7, 11, 14, 27, 28], "topic": [0, 21], "we": [1, 2, 3, 4, 5, 9], "major": 1, "adr": [1, 2], "describ": [1, 2, 28], "michael": [1, 2], "nygard": [1, 2], "below": [1, 5], "i": [1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 14, 15, 16, 21, 22, 23, 25, 26, 28, 29, 30, 31], "list": [1, 6, 7, 27, 28], "our": 1, "current": [1, 14, 27, 28, 29, 30], "1": [1, 6, 7, 16], "2": [1, 16, 20, 28], "No": 1, "queue": [1, 6, 28], "model": [1, 5, 6, 7, 28], "date": [2, 3, 4], "2022": 2, "02": 2, "18": 2, "need": [2, 18, 21, 30], "made": 2, "project": [2, 8, 12, 14, 15], "us": [2, 5, 7, 15, 16, 17, 20, 22, 24, 27, 30, 31], "see": [2, 5, 7, 8, 11], "": [2, 5, 6, 7], "articl": 2, "link": [2, 15, 25], "abov": [2, 10], "To": [2, 11, 14, 17, 22, 24, 31], "creat": [2, 7, 11, 29], "new": [2, 7, 9, 11, 17, 25, 29], "copi": 2, "past": 2, "exist": [2, 6, 9, 22, 30], "ones": [2, 4], "2023": [3, 4], "05": [3, 4], "22": 3, "ask": [3, 5, 9], "whether": [3, 4, 5, 28], "servic": [3, 6, 18, 20, 28], "should": [3, 4, 7, 9, 23, 30], "execut": [3, 27, 28, 29], "The": [3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 18, 20, 21, 23, 28, 30, 31], "worker": [3, 6, 15, 25, 27, 28, 29], "one": [3, 9, 12, 21], "time": [3, 5, 6, 7, 9, 10, 23, 28], "return": [3, 6, 7, 16, 28, 29], "while": [3, 6, 9], "anoth": 3, "differ": [3, 4, 5, 21], "must": [3, 5, 7, 23], "free": [3, 9], "although": 3, "transact": 3, "permit": 3, "where": [3, 7, 13, 14, 22, 28], "server": [3, 23, 29], "cach": 3, "23": 4, "consid": [4, 16], "kei": [4, 6], "json": [4, 6, 7, 10, 23, 28], "blob": 4, "snake_cas": 4, "camelcas": 4, "which": [4, 5, 6, 8, 14, 17, 22, 23, 28, 29], "mai": [4, 6, 29], "user": [4, 5, 6, 15, 20], "defin": [4, 7, 16, 22, 28], "prioriti": 4, "confus": 4, "alia": 4, "field": 4, "most": [4, 9, 21], "code": [4, 5, 6, 8, 10, 17, 20, 29], "written": [4, 6], "pep8": 4, "enforc": 4, "mean": [4, 14], "some": 4, "add": 5, "top": 5, "sinc": [5, 28], "front": 5, "sometim": 5, "assum": [5, 15, 18, 31], "intuit": 5, "behaviour": 5, "replac": [5, 7], "fill": 5, "gap": 5, "base": [5, 8, 28], "engin": 5, "programat": 5, "data": [5, 6, 28], "conform": [5, 16], "meant": [5, 23], "other": [5, 6, 28, 29], "subscrib": [5, 28], "e": [5, 6, 7, 8, 10, 12, 13, 17], "g": [5, 6, 7], "databrok": 5, "decoupl": 5, "concern": 5, "start": [5, 6, 25, 28], "finish": [5, 6, 23], "paus": [5, 28, 29], "exampl": [5, 7, 16, 22], "sequenc": 5, "emiss": 5, "compar": 5, "complic": 5, "note": [5, 11, 23, 25], "between": [5, 6, 14], "issu": [5, 13], "first": [5, 17], "document": [5, 6, 8, 9, 15, 17, 25, 27, 28, 29], "similar": 5, "stop": [5, 28, 29], "v": 5, "end": [5, 9, 28, 29], "thsse": 5, "typic": [5, 25], "setup": [5, 14, 17, 18], "cleanup": 5, "produc": [5, 28], "arbitrari": [5, 23], "fine": 5, "becaus": [5, 7], "when": [5, 6, 7, 9, 17, 28], "associ": [5, 28], "For": [5, 7, 16], "introduc": 5, "set": [5, 7, 9, 10, 16, 18, 22, 29], "specif": [5, 25], "pertain": 5, "state": [5, 6, 7, 28, 29], "At": [5, 6, 7], "mimimum": 5, "everi": 5, "complet": [5, 28, 31], "fail": [5, 6, 12, 27], "latter": 5, "inform": [5, 9, 21, 29], "about": [5, 20, 25, 29], "control": [5, 18, 25, 28], "verifi": 5, "realli": 5, "relat": [5, 28], "you": [5, 8, 9, 10, 11, 12, 13, 15, 17, 18, 22, 23, 30, 31], "therefor": 5, "bundl": 5, "contain": [5, 9, 16, 17, 20, 23, 25, 31], "microsoft": 5, "playbook": 5, "activemq": [5, 12, 18], "depend": [5, 24, 30], "protocol": [5, 6, 7, 28], "jm": 5, "jms_correlationid": 5, "stomp": [5, 12], "follow": [6, 9, 11, 16, 17, 18, 22], "demonstr": 6, "exactli": 6, "what": [6, 9, 28], "doe": [6, 9], "through": [6, 7, 9, 12, 17, 29], "being": [6, 7, 28], "take": [6, 7, 17], "type": [6, 13, 15, 16, 17, 22, 28, 30], "import": [6, 16], "union": 6, "map": 6, "core": 6, "inject": 6, "readabl": [6, 7, 28], "ophyd": [6, 7, 28], "compon": [6, 28], "def": [6, 7, 16], "count": [6, 7, 23], "detector": [6, 7, 23], "det": 6, "default": [6, 22, 23, 28], "onli": [6, 7, 27], "num": [6, 7], "int": [6, 7, 16], "delai": [6, 7], "option": [6, 11, 22, 27], "float": [6, 28], "none": [6, 27], "metadata": [6, 28], "str": [6, 7, 16, 26], "msggener": 6, "n": 6, "read": [6, 15], "collect": [6, 28], "arg": [6, 16, 27], "fetch": 6, "context": [6, 7], "els": 6, "overriden": 6, "valu": [6, 16, 28, 29], "export": 6, "_description_": 6, "yield": 6, "iter": [6, 7], "bp": 6, "md": 6, "configur": [6, 18, 25, 27], "either": [6, 17, 23], "blueskycontext": [6, 7], "go": [6, 11], "all": [6, 7, 9, 10, 29], "them": [6, 7, 12, 13], "detect": 6, "thei": [6, 7, 21, 28], "point": [6, 28], "inspect": 6, "hint": [6, 16], "build": [6, 15, 16], "pydant": [6, 7, 22], "word": 6, "someth": [6, 7, 9, 14], "like": [6, 7, 12], "basemodel": [6, 7, 22], "class": [6, 7], "countparamet": 6, "config": [6, 22, 27, 31], "arbitrary_types_allow": 6, "true": [6, 16, 28, 29], "validate_al": 6, "illustr": 6, "purpos": [6, 21], "actual": [6, 7], "object": [6, 7, 22, 28], "resembl": 6, "construct": 6, "memori": 6, "argument": [6, 27], "check": [6, 7, 9, 10, 12, 13, 14, 16, 17], "until": [6, 23, 27, 28, 29], "store": 6, "On": 6, "A": [6, 28], "send": 6, "form": [6, 7], "look": [6, 7, 12], "param": [6, 7], "andor": [6, 7], "pilatu": [6, 7], "3": [6, 7, 16, 17, 28, 30], "0": [6, 7, 23, 28], "receiv": 6, "intern": [6, 7, 26], "soon": 6, "earlier": 6, "function": [6, 12, 16, 21], "itself": 6, "out": 6, "up": [6, 7, 9, 15, 18], "wa": [6, 7, 28], "publish": [6, 11, 28], "chang": [6, 8, 9, 10, 12, 14, 20, 28], "status": [6, 28], "within": [6, 28], "motor": 6, "posit": [6, 28], "emit": [6, 15], "If": [6, 8, 9, 10, 29, 30], "occur": 6, "dure": [6, 28], "stage": 6, "onward": 6, "sent": [6, 7, 28], "back": [6, 20], "over": [6, 7], "futur": 7, "my_plan": 7, "b": 7, "becom": 7, "myplanmodel": 7, "That": 7, "wai": [7, 25, 31], "pars": 7, "howev": [7, 22], "cover": 7, "doesn": 7, "t": [7, 9, 21, 27], "simpl": 7, "primit": 7, "instead": [7, 9, 24], "cannot": 7, "network": 7, "string": [7, 28, 29], "repres": [7, 21, 28], "id": [7, 28], "suppos": 7, "load": 7, "avail": [7, 18, 23, 24, 27, 29], "signatur": [7, 16], "instanc": [7, 31], "extend": [7, 16], "origin": [7, 28], "allow": [7, 28], "deserialis": 7, "correct": 7, "intermedi": 7, "process": [7, 8, 16], "never": 7, "runtim": 7, "fact": 7, "access": [7, 15, 23, 25, 28], "via": [7, 18, 25, 31], "closur": 7, "circumv": 7, "usual": 7, "problem": 7, "abl": 7, "extern": [7, 28], "place": [7, 9], "level": 7, "my_weird_plan": 7, "c": [7, 27], "dict": 7, "d": 7, "directori": [8, 16], "tox": [8, 10, 12, 13, 17], "static": [8, 15, 16, 17], "pull": [8, 9, 14, 24], "docstr": [8, 16], "standard": [8, 9, 15], "built": [8, 24], "html": [8, 28], "open": [8, 9, 17], "local": [8, 17], "web": 8, "brows": 8, "firefox": 8, "index": [8, 25], "watch": 8, "your": [8, 9, 18, 22], "rebuild": 8, "whenev": 8, "reload": 8, "browser": 8, "page": [8, 11, 16, 28, 29], "view": 8, "localhost": [8, 23], "http": [8, 11, 14, 20, 28, 30], "8000": 8, "make": [8, 9, 15], "sourc": [8, 13, 17, 18, 20, 30], "too": 8, "tell": [8, 10, 23], "src": [8, 22], "welcom": 9, "github": [9, 11, 14, 17, 20, 24, 28, 30], "pleas": [9, 11, 16], "befor": 9, "file": [9, 10, 13, 22, 27, 28, 31], "great": 9, "idea": 9, "involv": [9, 28], "big": 9, "ticket": 9, "want": 9, "sure": 9, "don": 9, "spend": 9, "might": 9, "fit": 9, "scope": 9, "offer": 9, "question": 9, "share": 9, "obviou": 9, "close": [9, 14], "rais": 9, "100": 9, "librari": [9, 20, 25], "bug": 9, "significantli": 9, "reduc": 9, "easili": 9, "caught": 9, "remain": [9, 28], "same": [9, 11], "improv": [9, 21], "environ": [9, 15, 17, 23], "test": [9, 15, 23], "black": [10, 16], "flake8": [10, 16], "isort": [10, 16], "under": [10, 17], "command": [10, 18, 22, 23, 25, 31], "Or": 10, "instal": [10, 15, 18, 20, 23, 24, 25, 31], "hook": 10, "each": 10, "do": [10, 13], "git": [10, 14, 17, 30], "report": [10, 12], "reformat": 10, "repositori": [10, 16], "likewis": 10, "get": [10, 11, 15, 17, 24, 27, 29], "those": 10, "manual": 10, "formatt": 10, "save": [10, 27], "highlight": [10, 13], "editor": 10, "window": 10, "checklist": 11, "choos": [11, 17], "pep440": 11, "compliant": 11, "pep": 11, "org": [11, 28], "0440": 11, "draft": 11, "click": [11, 17, 18], "tag": 11, "suppli": [11, 28], "chose": 11, "review": 11, "edit": [11, 22], "titl": [11, 16, 28], "push": 11, "branch": 11, "effect": 11, "except": 11, "find": 12, "coverag": 12, "commandlin": [12, 30], "cov": 12, "xml": 12, "connect": 12, "live": 12, "broker": [12, 23], "present": 12, "inconveni": 12, "wish": [12, 22], "unrel": 12, "avoid": 12, "still": 12, "ci": 12, "noth": 12, "slip": 12, "crack": 12, "definit": 13, "without": 13, "potenti": 13, "match": 13, "merg": 14, "python3": [14, 17, 30], "pip": [14, 17, 20, 23, 30], "skeleton": 14, "structur": [14, 28], "keep": [14, 28], "techniqu": 14, "sync": 14, "multipl": 14, "latest": 14, "version": [14, 18, 24, 26, 27, 28], "rebas": 14, "fals": [14, 28], "com": [14, 17, 28, 30], "diamondlightsourc": [14, 17, 20, 24, 28, 30], "conflict": [14, 29], "indic": [14, 28], "area": 14, "more": [14, 17, 21, 25], "detail": 14, "split": [15, 20, 25], "four": [15, 21, 25], "categori": [15, 25], "side": [15, 25], "bar": [15, 25], "debug": [15, 23], "contribut": [15, 20], "doc": [15, 16, 17, 28], "sphinx": [15, 16, 17], "pytest": [15, 17], "analysi": [15, 16, 17], "mypi": [15, 16, 17], "lint": [15, 16, 17], "pre": [15, 16, 17, 24], "commit": [15, 16, 17], "tool": [15, 16, 23], "releas": [15, 20, 24, 25, 30], "practic": [15, 25], "step": [15, 17, 25], "dai": 15, "dev": [15, 17], "architectur": 15, "decis": 15, "record": 15, "lifecycl": 15, "why": [15, 25, 29], "technic": [15, 21, 25], "materi": [15, 25], "format": [16, 28], "style": [16, 28], "order": [16, 21], "how": [16, 21, 28], "guid": [16, 20, 21], "napoleon": 16, "extens": 16, "As": 16, "googl": 16, "func": 16, "arg1": 16, "arg2": 16, "bool": 16, "summari": [16, 28], "line": [16, 18, 23, 25, 31], "descript": [16, 28], "extract": 16, "underlin": 16, "convent": 16, "headl": 16, "head": 16, "minim": [17, 23], "host": [17, 23, 31], "machin": 17, "venv": [17, 18, 30], "9": [17, 30, 31], "later": [17, 28, 30], "vscode": [17, 18, 23], "virtualenv": 17, "cd": 17, "m": [17, 30], "bin": [17, 18, 30], "activ": [17, 18, 29, 30], "devcontain": 17, "reopen": 17, "prompt": 17, "epic": 17, "complex": 17, "integr": 17, "podman": [17, 31], "graph": 17, "packag": 17, "tree": 17, "pipdeptre": 17, "now": [17, 30], "p": [17, 23], "parallel": 17, "insid": 18, "virtual": 18, "cli": [18, 22, 25, 27, 31], "serv": [18, 31], "addit": 18, "capabl": 18, "navig": 18, "left": 18, "hand": 18, "menu": 18, "select": 18, "green": 18, "button": 18, "lightweight": 20, "wrapper": 20, "applic": [20, 25, 28], "usabl": 20, "pypi": 20, "io": [20, 24], "todo": [20, 28], "talk": [20, 23], "automag": 20, "endpoint": [20, 29], "section": 20, "develop": [20, 23, 27], "grand": 21, "unifi": 21, "theori": 21, "david": 21, "la": 21, "There": 21, "secret": 21, "understood": 21, "write": [21, 22], "good": 21, "softwar": [21, 30], "isn": 21, "thing": 21, "call": [21, 22, 29], "tutori": 21, "explan": 21, "approach": 21, "creation": 21, "understand": 21, "implic": 21, "help": 21, "often": 21, "immens": 21, "By": [22, 23, 29], "ingest": 22, "overrid": 22, "yaml": [22, 27], "found": 22, "schema": [22, 28], "py": 22, "applicationconfig": 22, "own": 22, "simpli": 22, "path": [22, 27, 30, 31], "rel": 22, "Then": 22, "subsequ": 22, "child": 22, "come": 23, "client": [23, 27, 28], "product": 23, "tcp": 23, "61613": 23, "custom": [23, 31], "h": 23, "my": 23, "61614": 23, "sleep": 23, "5": [23, 31], "current_det": 23, "image_det": 23, "block": 23, "statu": [23, 28, 29], "full": [23, 27, 31], "interfac": [23, 25, 30, 31], "alreadi": 24, "docker": [24, 31], "ghcr": 24, "quickstart": 25, "usag": 25, "here": 25, "experienc": 25, "work": 25, "rest": [25, 27], "__version__": 26, "calcul": 26, "pypa": 26, "setuptools_scm": 26, "show": 27, "exit": 27, "util": 27, "introspect": 27, "mark": [27, 29], "ongo": 27, "reason": [27, 29], "defer": [27, 29], "next": 27, "checkpoint": [27, 29], "timeout": 27, "second": 27, "hang": 27, "forev": 27, "print": 27, "success": [27, 29], "o": 27, "output": 27, "u": 27, "track": 28, "channel": 28, "asyncapi": 28, "6": 28, "info": 28, "scan": 28, "contact": 28, "callum": 28, "forrest": 28, "email": 28, "diamond": 28, "ac": 28, "uk": 28, "licens": 28, "apach": 28, "url": 28, "www": 28, "defaultcontenttyp": 28, "public": 28, "oper": 28, "operationid": 28, "dataev": 28, "oneof": 28, "ref": 28, "workerstateev": 28, "workerprogressev": 28, "taggedstartdocu": 28, "taggeddescriptordocu": 28, "taggedeventdocu": 28, "taggedstopdocu": 28, "taggedresourcedocu": 28, "taggeddatumdocu": 28, "taggedresourcestream": 28, "taggeddatumstream": 28, "taggedeventpag": 28, "taggeddatumpag": 28, "referenc": 28, "correlationid": 28, "bind": 28, "messageid": 28, "runstart": 28, "previous": 28, "specifi": 28, "initi": 28, "header": 28, "contexthead": 28, "payload": 28, "properti": 28, "raw": 28, "githubusercont": 28, "master": 28, "event_model": 28, "run_start": 28, "runstop": 28, "condit": 28, "run_stop": 28, "eventstreamdescriptor": 28, "scientif": 28, "stream": 28, "measur": 28, "event_descriptor": 28, "eventpag": 28, "deprec": 28, "event_pag": 28, "resourc": 28, "databas": 28, "entri": 28, "datum": 28, "datumpag": 28, "datum_pag": 28, "streamresourc": 28, "stream_resourc": 28, "streamdatum": 28, "slice": 28, "stream_datum": 28, "stateev": 28, "warn": 28, "workerst": 28, "taskstatu": 28, "arrai": 28, "item": 28, "progressev": 28, "tasknam": 28, "uniqu": [28, 29], "submit": [28, 29], "additionalproperti": 28, "statusview": 28, "destin": 28, "replydestin": 28, "temporari": 28, "caller": 28, "listen": 28, "x": 28, "identifi": 28, "exchang": 28, "enum": 28, "idl": 28, "halt": 28, "abort": [28, 29], "suspend": 28, "panick": 28, "unknown": 28, "taskcomplet": 28, "taskfail": 28, "reac": 28, "boolean": 28, "outcom": 28, "achiev": 28, "displaynam": 28, "unit": 28, "precis": 28, "target": 28, "sensibl": 28, "displai": 28, "integ": 28, "percentag": 28, "timeelaps": 28, "elaps": 28, "begin": 28, "timeremain": 28, "estim": 28, "fastapi": 29, "interact": 29, "possibl": 29, "retriev": 29, "200": 29, "ok": 29, "422": 29, "unprocess": 29, "entiti": 29, "post": 29, "201": 29, "delet": 29, "task_id": 29, "put": 29, "particular": 29, "new_stat": 29, "resum": 29, "result": 29, "400": 29, "bad": 29, "202": 29, "409": 29, "recommend": 30, "interfer": 30, "featur": 30, "simplest": 31, "rm": 31, "net": 31, "rmohr": 31, "15": 31, "alpin": 31}, "objects": {"": [[29, 0, 1, "get--devices", "/devices"], [29, 0, 1, "get--devices-name", "/devices/{name}"], [29, 0, 1, "get--plans", "/plans"], [29, 0, 1, "get--plans-name", "/plans/{name}"], [29, 1, 1, "post--tasks", "/tasks"], [29, 2, 1, "delete--tasks-task_id", "/tasks/{task_id}"], [29, 0, 1, "get--tasks-task_id", "/tasks/{task_id}"], [29, 0, 1, "get--worker-state", "/worker/state"], [29, 3, 1, "put--worker-state", "/worker/state"], [29, 0, 1, "get--worker-task", "/worker/task"], [29, 3, 1, "put--worker-task", "/worker/task"], [26, 4, 0, "-", "blueapi"]], "blueapi.blueapi": [[26, 5, 1, "", "__version__"]], "blueapi-controller-abort": [[27, 6, 1, "cmdoption-blueapi-controller-abort-arg-REASON", "REASON"]], "blueapi-controller-pause": [[27, 6, 1, "cmdoption-blueapi-controller-pause-defer", "--defer"]], "blueapi-controller-run": [[27, 6, 1, "cmdoption-blueapi-controller-run-t", "--timeout"], [27, 6, 1, "cmdoption-blueapi-controller-run-t", "-t"], [27, 6, 1, "cmdoption-blueapi-controller-run-arg-NAME", "NAME"], [27, 6, 1, "cmdoption-blueapi-controller-run-arg-PARAMETERS", "PARAMETERS"]], "blueapi-schema": [[27, 6, 1, "cmdoption-blueapi-schema-o", "--output"], [27, 6, 1, "cmdoption-blueapi-schema-u", "--update"], [27, 6, 1, "cmdoption-blueapi-schema-o", "-o"], [27, 6, 1, "cmdoption-blueapi-schema-u", "-u"]], "blueapi": [[27, 6, 1, "cmdoption-blueapi-c", "--config"], [27, 6, 1, "cmdoption-blueapi-version", "--version"], [27, 6, 1, "cmdoption-blueapi-c", "-c"]]}, "objtypes": {"0": "http:get", "1": "http:post", "2": "http:delete", "3": "http:put", "4": "py:module", "5": "py:data", "6": "std:cmdoption"}, "objnames": {"0": ["http", "get", "HTTP get"], "1": ["http", "post", "HTTP post"], "2": ["http", "delete", "HTTP delete"], "3": ["http", "put", "HTTP put"], "4": ["py", "module", "Python module"], "5": ["py", "data", "Python data"], "6": ["std", "cmdoption", "program option"]}, "titleterms": {"architectur": [0, 1, 2], "kei": 0, "compon": 0, "The": 0, "blueskycontext": 0, "object": 0, "worker": [0, 5, 18, 23, 31], "servic": 0, "decis": [1, 2, 3, 4], "record": [1, 2], "1": 2, "statu": [2, 3, 4], "context": [2, 3, 4], "consequ": [2, 3, 4], "2": [3, 4], "No": 3, "queue": 3, "api": [4, 19, 26], "model": 4, "case": 4, "event": 5, "emit": 5, "reason": 5, "new": 5, "correl": 5, "id": 5, "header": 5, "lifecycl": 6, "plan": [6, 23, 27], "load": 6, "registr": 6, "startup": 6, "request": 6, "valid": [6, 7], "execut": 6, "type": 7, "requir": 7, "solut": 7, "build": [8, 17], "doc": 8, "us": [8, 10, 12, 13], "sphinx": 8, "autobuild": 8, "contribut": 9, "project": 9, "issu": [9, 10], "discuss": 9, "code": [9, 16], "coverag": 9, "develop": [9, 15, 17, 18], "guid": [9, 15, 25, 31], "run": [10, 12, 13, 18, 23, 24, 27], "lint": 10, "pre": 10, "commit": 10, "fix": 10, "vscode": 10, "support": 10, "make": 11, "releas": 11, "test": [12, 17], "pytest": 12, "skip": 12, "messag": [12, 28], "bu": 12, "static": 13, "analysi": 13, "mypi": 13, "updat": 14, "tool": 14, "tutori": [15, 25], "how": [15, 20, 25], "explan": [15, 25], "refer": [15, 25], "standard": 16, "document": [16, 20, 21], "instal": [17, 30], "clone": 17, "repositori": 17, "depend": 17, "see": 17, "what": 17, "wa": 17, "debug": 18, "environ": [18, 30], "start": [18, 24, 31], "blueski": 18, "index": 19, "blueapi": [20, 26, 27], "i": 20, "structur": 20, "about": 21, "configur": 22, "applic": 22, "control": [23, 27], "via": 23, "cli": 23, "basic": 23, "introspect": 23, "contain": 24, "user": 25, "command": 27, "line": 27, "interfac": 27, "abort": 27, "devic": 27, "paus": 27, "resum": 27, "state": 27, "stop": 27, "schema": 27, "serv": 27, "specif": [28, 29], "rest": 29, "check": 30, "your": 30, "version": 30, "python": 30, "creat": 30, "virtual": 30, "librari": 30, "quickstart": 31, "activemq": 31}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Architecture": [[0, "architecture"]], "Key Components": [[0, "key-components"]], "The BlueskyContext Object": [[0, "the-blueskycontext-object"]], "The Worker Object": [[0, "the-worker-object"]], "The Service Object": [[0, "the-service-object"]], "Architectural Decision Records": [[1, "architectural-decision-records"]], "1. Record architecture decisions": [[2, "record-architecture-decisions"]], "Status": [[2, "status"], [3, "status"], [4, "status"]], "Context": [[2, "context"], [3, "context"], [4, "context"]], "Decision": [[2, "decision"], [3, "decision"], [4, "decision"]], "Consequences": [[2, "consequences"], [3, "consequences"], [4, "consequences"]], "2. No Queues": [[3, "no-queues"]], "2. API Model Case": [[4, "api-model-case"]], "Events Emitted by the Worker": [[5, "events-emitted-by-the-worker"]], "Reasons": [[5, "reasons"]], "New Events": [[5, "new-events"]], "Correlation ID": [[5, "correlation-id"]], "Correlation ID Headers": [[5, "id2"]], "Lifecycle of a Plan": [[6, "lifecycle-of-a-plan"]], "Loading and Registration": [[6, "loading-and-registration"]], "Startup": [[6, "startup"]], "Request": [[6, "request"]], "Validation": [[6, "validation"]], "Execution": [[6, "execution"]], "Type Validators": [[7, "type-validators"]], "Requirement": [[7, "requirement"]], "Solution": [[7, "solution"]], "Build the docs using sphinx": [[8, "build-the-docs-using-sphinx"]], "Autobuild": [[8, "autobuild"]], "Contributing to the project": [[9, "contributing-to-the-project"]], "Issue or Discussion?": [[9, "issue-or-discussion"]], "Code coverage": [[9, "code-coverage"]], "Developer guide": [[9, "developer-guide"]], "Run linting using pre-commit": [[10, "run-linting-using-pre-commit"]], "Running pre-commit": [[10, "running-pre-commit"]], "Fixing issues": [[10, "fixing-issues"]], "VSCode support": [[10, "vscode-support"]], "Make a release": [[11, "make-a-release"]], "Run the tests using pytest": [[12, "run-the-tests-using-pytest"]], "Skip the message bus tests": [[12, "skip-the-message-bus-tests"]], "Run static analysis using mypy": [[13, "run-static-analysis-using-mypy"]], "Update the tools": [[14, "update-the-tools"]], "Developer Guide": [[15, "developer-guide"]], "Tutorials": [[15, null], [25, null]], "How-to Guides": [[15, null], [25, null]], "Explanations": [[15, null], [25, null]], "Reference": [[15, null], [25, null]], "Standards": [[16, "standards"]], "Code Standards": [[16, "code-standards"]], "Documentation Standards": [[16, "documentation-standards"]], "Developer install": [[17, "developer-install"]], "Clone the repository": [[17, "clone-the-repository"]], "Install dependencies": [[17, "install-dependencies"]], "See what was installed": [[17, "see-what-was-installed"]], "Build and test": [[17, "build-and-test"]], "Run/Debug in a Developer Environment": [[18, "run-debug-in-a-developer-environment"]], "Start Bluesky Worker": [[18, "start-bluesky-worker"]], "API Index": [[19, "api-index"]], "blueapi": [[20, "blueapi"], [26, "blueapi"], [27, "blueapi"]], "How the documentation is structured": [[20, "how-the-documentation-is-structured"]], "About the documentation": [[21, "about-the-documentation"]], "Configure the application": [[22, "configure-the-application"]], "Control the Worker via the CLI": [[23, "control-the-worker-via-the-cli"]], "Basic Introspection": [[23, "basic-introspection"]], "Running Plans": [[23, "running-plans"]], "Run in a container": [[24, "run-in-a-container"]], "Starting the container": [[24, "starting-the-container"]], "User Guide": [[25, "user-guide"]], "API": [[26, "module-blueapi"]], "Command-Line Interface": [[27, "command-line-interface"]], "controller": [[27, "blueapi-controller"]], "abort": [[27, "blueapi-controller-abort"]], "devices": [[27, "blueapi-controller-devices"]], "pause": [[27, "blueapi-controller-pause"]], "plans": [[27, "blueapi-controller-plans"]], "resume": [[27, "blueapi-controller-resume"]], "run": [[27, "blueapi-controller-run"]], "state": [[27, "blueapi-controller-state"]], "stop": [[27, "blueapi-controller-stop"]], "schema": [[27, "blueapi-schema"]], "serve": [[27, "blueapi-serve"]], "Messaging Specification": [[28, "messaging-specification"]], "REST Specification": [[29, "rest-specification"]], "Installation": [[30, "installation"]], "Check your version of python": [[30, "check-your-version-of-python"]], "Create a virtual environment": [[30, "create-a-virtual-environment"]], "Installing the library": [[30, "installing-the-library"]], "Quickstart Guide": [[31, "quickstart-guide"]], "Start ActiveMQ": [[31, "start-activemq"]], "Start Worker": [[31, "start-worker"]]}, "indexentries": {"blueapi": [[26, "module-blueapi"]], "blueapi.__version__ (in module blueapi)": [[26, "blueapi.blueapi.__version__"]], "module": [[26, "module-blueapi"]], "--config": [[27, "cmdoption-blueapi-c"]], "--defer": [[27, "cmdoption-blueapi-controller-pause-defer"]], "--output": [[27, "cmdoption-blueapi-schema-o"]], "--timeout": [[27, "cmdoption-blueapi-controller-run-t"]], "--update": [[27, "cmdoption-blueapi-schema-u"]], "--version": [[27, "cmdoption-blueapi-version"]], "-c": [[27, "cmdoption-blueapi-c"]], "-o": [[27, "cmdoption-blueapi-schema-o"]], "-t": [[27, "cmdoption-blueapi-controller-run-t"]], "-u": [[27, "cmdoption-blueapi-schema-u"]], "name": [[27, "cmdoption-blueapi-controller-run-arg-NAME"]], "parameters": [[27, "cmdoption-blueapi-controller-run-arg-PARAMETERS"]], "reason": [[27, "cmdoption-blueapi-controller-abort-arg-REASON"]], "blueapi command line option": [[27, "cmdoption-blueapi-c"], [27, "cmdoption-blueapi-version"]], "blueapi-controller-abort command line option": [[27, "cmdoption-blueapi-controller-abort-arg-REASON"]], "blueapi-controller-pause command line option": [[27, "cmdoption-blueapi-controller-pause-defer"]], "blueapi-controller-run command line option": [[27, "cmdoption-blueapi-controller-run-arg-NAME"], [27, "cmdoption-blueapi-controller-run-arg-PARAMETERS"], [27, "cmdoption-blueapi-controller-run-t"]], "blueapi-schema command line option": [[27, "cmdoption-blueapi-schema-o"], [27, "cmdoption-blueapi-schema-u"]]}})