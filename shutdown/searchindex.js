Search.setIndex({"docnames": ["developer/explanations/architecture", "developer/explanations/decisions", "developer/explanations/decisions/0001-record-architecture-decisions", "developer/explanations/decisions/0002-no-queues", "developer/explanations/events", "developer/explanations/lifecycle", "developer/explanations/type_validators", "developer/how-to/build-docs", "developer/how-to/contribute", "developer/how-to/lint", "developer/how-to/make-release", "developer/how-to/run-tests", "developer/how-to/static-analysis", "developer/how-to/update-tools", "developer/index", "developer/reference/standards", "developer/tutorials/dev-install", "developer/tutorials/dev-run", "genindex", "index", "user/explanations/docs-structure", "user/how-to/configure-app", "user/how-to/run-container", "user/index", "user/reference/api", "user/reference/messaging-spec", "user/reference/rest-spec", "user/tutorials/installation"], "filenames": ["developer/explanations/architecture.rst", "developer/explanations/decisions.rst", "developer/explanations/decisions/0001-record-architecture-decisions.rst", "developer/explanations/decisions/0002-no-queues.rst", "developer/explanations/events.rst", "developer/explanations/lifecycle.rst", "developer/explanations/type_validators.rst", "developer/how-to/build-docs.rst", "developer/how-to/contribute.rst", "developer/how-to/lint.rst", "developer/how-to/make-release.rst", "developer/how-to/run-tests.rst", "developer/how-to/static-analysis.rst", "developer/how-to/update-tools.rst", "developer/index.rst", "developer/reference/standards.rst", "developer/tutorials/dev-install.rst", "developer/tutorials/dev-run.rst", "genindex.rst", "index.rst", "user/explanations/docs-structure.rst", "user/how-to/configure-app.rst", "user/how-to/run-container.rst", "user/index.rst", "user/reference/api.rst", "user/reference/messaging-spec.rst", "user/reference/rest-spec.rst", "user/tutorials/installation.rst"], "titles": ["Architecture", "Architectural Decision Records", "1. Record architecture decisions", "2. No Queues", "Events Emitted by the Worker", "Lifecycle of a Plan", "Type Validators", "Build the docs using sphinx", "Contributing to the project", "Run linting using pre-commit", "Make a release", "Run the tests using pytest", "Run static analysis using mypy", "Update the tools", "Developer Guide", "Standards", "Developer install", "Run in a Developer Environment", "API Index", "blueapi", "About the documentation", "Configure the application", "Run in a container", "User Guide", "API", "Messaging Specification", "REST Specification", "Installation"], "terms": {"blueapi": [0, 4, 5, 6, 16, 17, 21, 22, 25, 26, 27], "perform": 0, "number": [0, 4, 5, 8, 10, 22, 24, 25], "task": [0, 3, 14, 25, 26], "manag": 0, "blueski": [0, 4, 5, 6, 19, 25], "runengin": [0, 4, 5], "give": [0, 4], "instruct": [0, 16], "handl": [0, 4, 8, 9], "its": [0, 5, 22, 25, 26, 27], "error": [0, 3, 4, 5, 11, 25, 26], "tradition": [0, 4], "thi": [0, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 15, 16, 20, 21, 24, 25, 26, 27], "job": 0, "ha": [0, 4, 6, 10, 13, 27], "been": [0, 27], "done": [0, 11, 12, 25], "human": [0, 4, 25], "an": [0, 3, 4, 5, 6, 7, 9, 13, 21, 25], "ipython": [0, 4], "termin": [0, 4, 16, 27], "so": [0, 4, 6, 16, 27], "requir": [0, 5, 11, 16, 17, 20, 25, 27], "autom": [0, 4], "maintain": 0, "registri": [0, 5, 22], "plan": [0, 4, 6, 14, 19, 25, 26], "devic": [0, 5, 6, 25, 26], "In": [0, 3, 4, 5], "aforement": 0, "case": [0, 4, 6, 16], "would": 0, "have": [0, 6, 8, 9, 14, 16, 17], "just": [0, 4, 9], "global": [0, 5], "variabl": [0, 5], "commun": 0, "outsid": [0, 4], "world": 0, "accept": [0, 2, 3, 26], "run": [0, 3, 4, 5, 7, 8, 13, 14, 15, 16, 23, 25, 26], "provid": [0, 13, 25], "updat": [0, 14, 26], "progress": [0, 25], "etc": [0, 4, 25], "These": [0, 4, 6, 16], "respons": [0, 3, 25, 26], "ar": [0, 3, 4, 5, 6, 7, 8, 11, 15, 17, 20, 21, 22], "kept": [0, 3], "separ": 0, "codebas": 0, "ensur": [0, 11, 17], "clean": 0, "main": [0, 10, 22], "hold": [0, 3, 5], "well": [0, 5, 9, 25], "helper": 0, "method": [0, 6], "regist": [0, 5], "en": 0, "mass": 0, "from": [0, 2, 4, 5, 6, 7, 14, 15, 17, 21, 22, 23, 25, 27], "normal": 0, "python": [0, 10, 13, 16], "modul": [0, 5, 13], "wrap": 0, "request": [0, 3, 6, 8, 13, 25, 26], "includ": [0, 4, 5, 7, 23], "name": [0, 4, 5, 6, 25, 26], "dictionari": [0, 6], "paramet": [0, 5, 6, 26], "pass": [0, 5, 6, 21], "valid": [0, 14, 26], "against": [0, 5, 6, 11], "known": [0, 6, 25], "expect": [0, 6, 25], "ani": [0, 3, 5, 6, 7, 8, 9, 13, 21, 25, 27], "api": [0, 3, 7, 15, 23, 25], "layer": 0, "refer": [0, 5, 6, 20, 24], "can": [0, 3, 4, 5, 6, 7, 8, 9, 11, 12, 16, 17, 21, 25, 26, 27], "interrog": 0, "messag": [0, 4, 5, 23], "reciev": [0, 25], "bu": [0, 5, 25], "It": [0, 5, 11, 12, 27], "also": [0, 4, 5, 6, 7, 8, 11, 14, 19, 23, 27], "forward": 0, "variou": [0, 6, 25], "event": [0, 5, 14, 25], "gener": [0, 5, 6, 10, 13, 25], "topic": [0, 20], "we": [1, 2, 3, 4, 8], "major": 1, "adr": [1, 2], "describ": [1, 2, 25], "michael": [1, 2], "nygard": [1, 2], "below": [1, 4], "i": [1, 3, 4, 5, 6, 8, 9, 11, 12, 13, 14, 15, 17, 20, 21, 23, 24, 25, 26, 27], "list": [1, 5, 6, 25], "our": 1, "current": [1, 13, 25, 27], "1": [1, 5, 6, 15], "2": [1, 15, 19, 25], "No": 1, "queue": [1, 5, 25], "date": [2, 3], "2022": 2, "02": 2, "18": 2, "need": [2, 20, 27], "made": 2, "project": [2, 7, 11, 13, 14], "us": [2, 4, 6, 14, 15, 16, 19, 21, 22, 27], "see": [2, 4, 6, 7, 10], "": [2, 4, 5, 6], "articl": 2, "link": [2, 14, 23], "abov": [2, 9], "To": [2, 10, 13, 16, 21, 22], "creat": [2, 6, 10, 26], "new": [2, 6, 8, 10, 16, 23, 26], "copi": 2, "past": 2, "exist": [2, 5, 8, 21, 27], "ones": 2, "2023": 3, "05": 3, "22": 3, "ask": [3, 4, 8], "whether": [3, 4, 25], "servic": [3, 5, 17, 19, 25], "should": [3, 6, 8, 27], "execut": [3, 25], "The": [3, 4, 5, 6, 7, 8, 9, 11, 15, 17, 19, 20, 25, 27], "worker": [3, 5, 14, 25, 26], "one": [3, 8, 11, 20], "time": [3, 4, 5, 6, 8, 9, 25], "return": [3, 5, 6, 15, 25, 26], "while": [3, 5, 8], "anoth": 3, "differ": [3, 4, 20], "must": [3, 4, 6], "free": [3, 8], "although": 3, "transact": 3, "permit": 3, "where": [3, 6, 12, 13, 21, 25], "server": [3, 26], "cach": 3, "add": 4, "top": 4, "model": [4, 5, 6, 25], "sinc": [4, 25], "front": 4, "sometim": 4, "assum": [4, 14, 17], "intuit": 4, "behaviour": 4, "replac": [4, 6], "fill": 4, "gap": 4, "base": [4, 7, 25], "engin": 4, "programat": 4, "data": [4, 5, 25], "conform": [4, 15], "meant": 4, "other": [4, 5, 25, 26], "subscrib": [4, 25], "code": [4, 5, 7, 9, 16, 19, 26], "e": [4, 5, 6, 7, 9, 11, 12, 16], "g": [4, 5, 6], "databrok": 4, "decoupl": 4, "concern": 4, "start": [4, 5, 23, 25], "finish": [4, 5], "paus": [4, 25, 26], "exampl": [4, 6, 15, 21], "sequenc": 4, "emiss": 4, "compar": 4, "complic": 4, "note": [4, 10, 23], "between": [4, 5, 13], "issu": [4, 12], "first": [4, 16], "document": [4, 5, 7, 8, 14, 16, 23, 25, 26], "similar": 4, "stop": [4, 25], "v": 4, "end": [4, 8, 25, 26], "thsse": 4, "typic": [4, 23], "setup": [4, 13, 16, 17], "cleanup": 4, "produc": [4, 25], "arbitrari": 4, "fine": 4, "becaus": [4, 6], "user": [4, 5, 14, 19], "when": [4, 5, 6, 8, 16, 25], "which": [4, 5, 7, 13, 16, 21, 25, 26], "associ": [4, 25], "For": [4, 6, 15], "introduc": 4, "set": [4, 6, 8, 9, 15, 21, 26], "specif": [4, 23], "pertain": 4, "state": [4, 5, 6, 25, 26], "At": [4, 5, 6], "mimimum": 4, "everi": 4, "complet": [4, 25], "fail": [4, 5, 11], "latter": 4, "inform": [4, 8, 20, 26], "about": [4, 19, 23, 26], "control": [4, 25], "verifi": 4, "realli": 4, "relat": [4, 25], "you": [4, 7, 8, 9, 10, 11, 12, 14, 16, 17, 21, 27], "therefor": 4, "bundl": 4, "contain": [4, 8, 15, 16, 17, 19, 23], "microsoft": 4, "playbook": 4, "activemq": [4, 11], "depend": [4, 22, 27], "protocol": [4, 5, 6, 25], "jm": 4, "jms_correlationid": 4, "stomp": [4, 11], "follow": [5, 8, 10, 15, 16, 21], "demonstr": 5, "exactli": 5, "what": [5, 8, 25], "doe": [5, 8], "through": [5, 6, 8, 11, 16, 26], "being": [5, 6, 25], "written": 5, "take": [5, 6, 16], "type": [5, 12, 14, 15, 16, 21, 25, 27], "import": [5, 15], "union": 5, "map": 5, "core": 5, "inject": 5, "readabl": [5, 6, 25], "ophyd": [5, 6, 25], "compon": [5, 25], "def": [5, 6, 15], "count": [5, 6], "detector": [5, 6], "det": 5, "default": [5, 21, 25], "onli": [5, 6], "num": [5, 6], "int": [5, 6, 15], "delai": [5, 6], "option": [5, 10, 21], "float": [5, 25], "none": 5, "metadata": [5, 25], "str": [5, 6, 15, 24], "msggener": 5, "n": 5, "read": [5, 14], "collect": [5, 25], "arg": [5, 15], "fetch": 5, "context": [5, 6], "els": 5, "overriden": 5, "kei": 5, "valu": [5, 15, 25, 26], "export": 5, "_description_": 5, "yield": 5, "iter": [5, 6], "bp": 5, "md": 5, "configur": [5, 17, 23], "either": [5, 16], "blueskycontext": [5, 6], "go": [5, 10], "all": [5, 6, 8, 9, 26], "them": [5, 6, 11, 12], "detect": 5, "thei": [5, 6, 20, 25], "point": [5, 25], "inspect": 5, "hint": [5, 15], "build": [5, 14, 15], "pydant": [5, 6, 21], "word": 5, "someth": [5, 6, 8, 13], "like": [5, 6, 11], "basemodel": [5, 6, 21], "class": [5, 6], "countparamet": 5, "config": [5, 21], "arbitrary_types_allow": 5, "true": [5, 15, 25, 26], "validate_al": 5, "illustr": 5, "purpos": [5, 20], "actual": [5, 6], "object": [5, 6, 21, 25], "resembl": 5, "construct": 5, "memori": 5, "argument": 5, "check": [5, 6, 8, 9, 11, 12, 13, 15, 16], "until": [5, 25, 26], "store": 5, "On": 5, "A": [5, 25], "send": 5, "form": [5, 6], "json": [5, 6, 9, 25], "mai": [5, 26], "look": [5, 6, 11], "param": [5, 6], "andor": [5, 6], "pilatu": [5, 6], "3": [5, 6, 15, 16, 25, 27], "0": [5, 6, 25], "receiv": 5, "intern": [5, 6, 24], "soon": 5, "earlier": 5, "function": [5, 11, 15, 20], "itself": 5, "out": 5, "up": [5, 6, 8, 14], "wa": [5, 6, 25], "publish": [5, 10, 25], "chang": [5, 7, 8, 9, 11, 13, 19, 25], "status": [5, 25], "within": [5, 25], "motor": 5, "posit": [5, 25], "emit": [5, 14], "If": [5, 7, 8, 9, 26, 27], "occur": 5, "dure": [5, 25], "stage": 5, "onward": 5, "sent": [5, 6, 25], "back": [5, 19], "over": [5, 6], "futur": 6, "my_plan": 6, "b": 6, "becom": 6, "myplanmodel": 6, "That": 6, "wai": [6, 17, 23], "pars": 6, "howev": [6, 21], "cover": 6, "doesn": 6, "t": [6, 8, 20], "simpl": 6, "primit": 6, "instead": [6, 8, 22], "cannot": 6, "network": 6, "string": [6, 25, 26], "repres": [6, 20, 25], "id": [6, 25], "suppos": 6, "load": 6, "avail": [6, 22, 26], "signatur": [6, 15], "instanc": [6, 17], "extend": [6, 15], "origin": [6, 25], "defin": [6, 15, 21, 25], "allow": [6, 25], "deserialis": 6, "correct": 6, "intermedi": 6, "process": [6, 7, 15], "never": 6, "runtim": 6, "fact": 6, "access": [6, 14, 23, 25], "via": [6, 17], "closur": 6, "circumv": 6, "usual": 6, "problem": 6, "abl": 6, "extern": [6, 25], "place": [6, 8], "level": 6, "my_weird_plan": 6, "c": 6, "dict": 6, "d": 6, "directori": [7, 15], "tox": [7, 9, 11, 12, 16], "static": [7, 14, 15, 16], "pull": [7, 8, 13, 22], "docstr": [7, 15], "standard": [7, 8, 14], "built": [7, 22], "html": [7, 25], "open": [7, 8, 16], "local": [7, 16], "web": 7, "brows": 7, "firefox": 7, "index": [7, 23], "watch": 7, "your": [7, 8, 17, 21], "rebuild": 7, "whenev": 7, "reload": 7, "browser": 7, "page": [7, 10, 15, 25, 26], "view": 7, "localhost": 7, "http": [7, 10, 13, 19, 25, 27], "8000": 7, "make": [7, 8, 14], "sourc": [7, 12, 16, 17, 19, 27], "too": 7, "tell": [7, 9], "src": [7, 21], "most": [8, 20], "welcom": 8, "github": [8, 10, 13, 16, 19, 22, 25, 27], "pleas": [8, 10, 15], "befor": 8, "file": [8, 9, 12, 21, 25], "great": 8, "idea": 8, "involv": [8, 25], "big": 8, "ticket": 8, "want": 8, "sure": 8, "don": 8, "spend": 8, "might": 8, "fit": 8, "scope": 8, "offer": 8, "question": 8, "share": 8, "obviou": 8, "close": [8, 13], "rais": 8, "100": 8, "librari": [8, 19, 23], "bug": 8, "significantli": 8, "reduc": 8, "easili": 8, "caught": 8, "remain": [8, 25], "same": [8, 10], "improv": [8, 20], "environ": [8, 14, 16], "test": [8, 14], "black": [9, 15], "flake8": [9, 15], "isort": [9, 15], "under": [9, 16], "command": [9, 17, 21], "Or": 9, "instal": [9, 14, 17, 19, 22, 23], "hook": 9, "each": 9, "do": [9, 12], "git": [9, 13, 16, 27], "report": [9, 11], "reformat": 9, "repositori": [9, 15], "likewis": 9, "get": [9, 10, 14, 16, 22, 26], "those": 9, "manual": 9, "formatt": 9, "save": 9, "highlight": [9, 12], "editor": 9, "window": 9, "checklist": 10, "choos": [10, 16], "pep440": 10, "compliant": 10, "pep": 10, "org": [10, 25], "0440": 10, "draft": 10, "click": [10, 16, 17], "tag": 10, "suppli": [10, 25], "chose": 10, "review": 10, "edit": [10, 21], "titl": [10, 15, 25], "push": 10, "branch": 10, "effect": 10, "except": 10, "find": 11, "coverag": 11, "commandlin": [11, 27], "cov": 11, "xml": 11, "connect": 11, "live": 11, "broker": 11, "present": 11, "inconveni": 11, "wish": [11, 21], "unrel": 11, "avoid": 11, "still": 11, "ci": 11, "noth": 11, "slip": 11, "crack": 11, "definit": 12, "without": 12, "potenti": 12, "match": 12, "merg": 13, "python3": [13, 16, 27], "pip": [13, 16, 19, 27], "skeleton": 13, "structur": [13, 25], "mean": 13, "keep": [13, 25], "techniqu": 13, "sync": 13, "multipl": 13, "latest": 13, "version": [13, 17, 22, 24, 25], "rebas": 13, "fals": [13, 25], "com": [13, 16, 25, 27], "diamondlightsourc": [13, 16, 19, 22, 25, 27], "conflict": [13, 26], "indic": [13, 25], "area": 13, "more": [13, 16, 20, 23], "detail": 13, "split": [14, 19, 23], "four": [14, 20, 23], "categori": [14, 23], "side": [14, 23], "bar": [14, 23], "contribut": [14, 19], "doc": [14, 15, 16, 25], "sphinx": [14, 15, 16], "pytest": [14, 16], "analysi": [14, 15, 16], "mypi": [14, 15, 16], "lint": [14, 15, 16], "pre": [14, 15, 16, 22], "commit": [14, 15, 16], "tool": [14, 15], "releas": [14, 19, 22, 23, 27], "practic": [14, 23], "step": [14, 16, 23], "dai": 14, "dev": [14, 16], "architectur": 14, "decis": 14, "record": 14, "lifecycl": 14, "why": [14, 23], "technic": [14, 20, 23], "materi": [14, 23], "format": [15, 25], "style": [15, 25], "order": [15, 20], "how": [15, 20, 25], "guid": [15, 19, 20], "napoleon": 15, "extens": 15, "As": 15, "googl": 15, "consid": 15, "func": 15, "arg1": 15, "arg2": 15, "bool": 15, "summari": [15, 25], "line": [15, 17], "descript": [15, 25], "extract": 15, "underlin": 15, "convent": 15, "headl": 15, "head": 15, "minim": 16, "host": [16, 17], "machin": 16, "venv": [16, 17, 27], "9": [16, 17, 27], "later": [16, 25, 27], "vscode": [16, 17], "virtualenv": 16, "cd": 16, "m": [16, 27], "bin": [16, 17, 27], "activ": [16, 17, 26, 27], "devcontain": 16, "reopen": 16, "prompt": 16, "epic": 16, "complex": 16, "integr": 16, "podman": [16, 17], "graph": 16, "packag": 16, "tree": 16, "pipdeptre": 16, "now": [16, 27], "p": 16, "parallel": 16, "simplest": 17, "docker": [17, 22], "rm": 17, "net": 17, "rmohr": 17, "5": 17, "15": 17, "alpin": 17, "insid": 17, "virtual": 17, "serv": 17, "navig": 17, "debug": 17, "left": 17, "hand": 17, "menu": 17, "select": 17, "green": 17, "button": 17, "lightweight": 19, "wrapper": 19, "applic": [19, 23, 25], "usabl": 19, "pypi": 19, "io": [19, 22], "todo": [19, 25], "talk": 19, "automag": 19, "endpoint": [19, 26], "section": 19, "develop": 19, "grand": 20, "unifi": 20, "theori": 20, "david": 20, "la": 20, "There": 20, "secret": 20, "understood": 20, "write": [20, 21], "good": 20, "softwar": [20, 27], "isn": 20, "thing": 20, "call": [20, 21, 26], "tutori": 20, "explan": 20, "approach": 20, "creation": 20, "understand": 20, "implic": 20, "help": 20, "often": 20, "immens": 20, "By": [21, 26], "ingest": 21, "overrid": 21, "yaml": 21, "found": [21, 26], "schema": [21, 25], "py": 21, "applicationconfig": 21, "own": 21, "simpli": 21, "cli": 21, "path": [21, 27], "rel": 21, "Then": 21, "subsequ": 21, "child": 21, "alreadi": 22, "ghcr": 22, "usag": 23, "here": 23, "experienc": 23, "work": 23, "rest": 23, "__version__": 24, "calcul": 24, "pypa": 24, "setuptools_scm": 24, "track": 25, "statu": [25, 26], "channel": 25, "client": 25, "asyncapi": 25, "6": 25, "info": 25, "scan": 25, "contact": 25, "callum": 25, "forrest": 25, "email": 25, "diamond": 25, "ac": 25, "uk": 25, "licens": 25, "apach": 25, "url": 25, "www": 25, "defaultcontenttyp": 25, "public": 25, "oper": 25, "operationid": 25, "dataev": 25, "oneof": 25, "ref": 25, "workerstateev": 25, "workerprogressev": 25, "taggedstartdocu": 25, "taggeddescriptordocu": 25, "taggedeventdocu": 25, "taggedstopdocu": 25, "taggedresourcedocu": 25, "taggeddatumdocu": 25, "taggedresourcestream": 25, "taggeddatumstream": 25, "taggedeventpag": 25, "taggeddatumpag": 25, "referenc": 25, "correlationid": 25, "bind": 25, "messageid": 25, "runstart": 25, "previous": 25, "specifi": 25, "initi": 25, "header": 25, "contexthead": 25, "payload": 25, "properti": 25, "raw": 25, "githubusercont": 25, "master": 25, "event_model": 25, "run_start": 25, "runstop": 25, "condit": 25, "run_stop": 25, "eventstreamdescriptor": 25, "scientif": 25, "stream": 25, "measur": 25, "event_descriptor": 25, "eventpag": 25, "deprec": 25, "event_pag": 25, "resourc": 25, "databas": 25, "entri": 25, "datum": 25, "datumpag": 25, "datum_pag": 25, "streamresourc": 25, "stream_resourc": 25, "streamdatum": 25, "slice": 25, "stream_datum": 25, "stateev": 25, "warn": 25, "workerst": 25, "taskstatu": 25, "arrai": 25, "item": 25, "progressev": 25, "tasknam": 25, "uniqu": [25, 26], "submit": [25, 26], "additionalproperti": 25, "statusview": 25, "destin": 25, "replydestin": 25, "temporari": 25, "caller": 25, "listen": 25, "x": 25, "identifi": 25, "exchang": 25, "enum": 25, "idl": 25, "halt": 25, "abort": 25, "suspend": 25, "panick": 25, "unknown": 25, "taskcomplet": 25, "taskfail": 25, "reac": 25, "boolean": 25, "outcom": 25, "achiev": 25, "displaynam": 25, "unit": 25, "precis": 25, "target": 25, "sensibl": 25, "displai": 25, "integ": 25, "percentag": 25, "timeelaps": 25, "elaps": 25, "begin": 25, "timeremain": 25, "estim": 25, "fastapi": 26, "interact": 26, "possibl": 26, "retriev": 26, "200": 26, "ok": 26, "success": 26, "404": 26, "Not": 26, "422": 26, "unprocess": 26, "entiti": 26, "post": 26, "201": 26, "task_id": 26, "put": 26, "particular": 26, "new_stat": 26, "resum": 26, "defer": 26, "checkpoint": 26, "result": 26, "400": 26, "bad": 26, "202": 26, "409": 26, "recommend": 27, "interfer": 27, "featur": 27, "interfac": 27}, "objects": {"": [[26, 0, 1, "get--devices", "/devices"], [26, 0, 1, "get--devices-name", "/devices/{name}"], [26, 0, 1, "get--plans", "/plans"], [26, 0, 1, "get--plans-name", "/plans/{name}"], [26, 1, 1, "post--tasks", "/tasks"], [26, 0, 1, "get--tasks-task_id", "/tasks/{task_id}"], [26, 0, 1, "get--worker-state", "/worker/state"], [26, 2, 1, "put--worker-state", "/worker/state"], [26, 0, 1, "get--worker-task", "/worker/task"], [26, 2, 1, "put--worker-task", "/worker/task"], [24, 3, 0, "-", "blueapi"]], "blueapi.blueapi": [[24, 4, 1, "", "__version__"]]}, "objtypes": {"0": "http:get", "1": "http:post", "2": "http:put", "3": "py:module", "4": "py:data"}, "objnames": {"0": ["http", "get", "HTTP get"], "1": ["http", "post", "HTTP post"], "2": ["http", "put", "HTTP put"], "3": ["py", "module", "Python module"], "4": ["py", "data", "Python data"]}, "titleterms": {"architectur": [0, 1, 2], "kei": 0, "compon": 0, "The": 0, "blueskycontext": 0, "object": 0, "worker": [0, 4, 17], "servic": 0, "decis": [1, 2, 3], "record": [1, 2], "1": 2, "statu": [2, 3], "context": [2, 3], "consequ": [2, 3], "2": 3, "No": 3, "queue": 3, "event": 4, "emit": 4, "reason": 4, "new": 4, "correl": 4, "id": 4, "header": 4, "lifecycl": 5, "plan": 5, "load": 5, "registr": 5, "startup": 5, "request": 5, "valid": [5, 6], "execut": 5, "type": 6, "requir": 6, "solut": 6, "build": [7, 16], "doc": 7, "us": [7, 9, 11, 12], "sphinx": 7, "autobuild": 7, "contribut": 8, "project": 8, "issu": [8, 9], "discuss": 8, "code": [8, 15], "coverag": 8, "develop": [8, 14, 16, 17], "guid": [8, 14, 23], "run": [9, 11, 12, 17, 22], "lint": 9, "pre": 9, "commit": 9, "fix": 9, "vscode": 9, "support": 9, "make": 10, "releas": 10, "test": [11, 16], "pytest": 11, "skip": 11, "messag": [11, 25], "bu": 11, "static": 12, "analysi": 12, "mypi": 12, "updat": 13, "tool": 13, "tutori": [14, 23], "how": [14, 19, 23], "explan": [14, 23], "refer": [14, 23], "standard": 15, "document": [15, 19, 20], "instal": [16, 27], "clone": 16, "repositori": 16, "depend": 16, "see": 16, "what": 16, "wa": 16, "environ": [17, 27], "start": [17, 22], "activemq": 17, "blueski": 17, "api": [18, 24], "index": 18, "blueapi": [19, 24], "i": 19, "structur": 19, "about": 20, "configur": 21, "applic": 21, "contain": 22, "user": 23, "specif": [25, 26], "rest": 26, "check": 27, "your": 27, "version": 27, "python": 27, "creat": 27, "virtual": 27, "librari": 27}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.viewcode": 1, "sphinx": 57}, "alltitles": {"Architecture": [[0, "architecture"]], "Key Components": [[0, "key-components"]], "The BlueskyContext Object": [[0, "the-blueskycontext-object"]], "The Worker Object": [[0, "the-worker-object"]], "The Service Object": [[0, "the-service-object"]], "Architectural Decision Records": [[1, "architectural-decision-records"]], "1. Record architecture decisions": [[2, "record-architecture-decisions"]], "Status": [[2, "status"], [3, "status"]], "Context": [[2, "context"], [3, "context"]], "Decision": [[2, "decision"], [3, "decision"]], "Consequences": [[2, "consequences"], [3, "consequences"]], "2. No Queues": [[3, "no-queues"]], "Events Emitted by the Worker": [[4, "events-emitted-by-the-worker"]], "Reasons": [[4, "reasons"]], "New Events": [[4, "new-events"]], "Correlation ID": [[4, "correlation-id"]], "Correlation ID Headers": [[4, "id2"]], "Lifecycle of a Plan": [[5, "lifecycle-of-a-plan"]], "Loading and Registration": [[5, "loading-and-registration"]], "Startup": [[5, "startup"]], "Request": [[5, "request"]], "Validation": [[5, "validation"]], "Execution": [[5, "execution"]], "Type Validators": [[6, "type-validators"]], "Requirement": [[6, "requirement"]], "Solution": [[6, "solution"]], "Build the docs using sphinx": [[7, "build-the-docs-using-sphinx"]], "Autobuild": [[7, "autobuild"]], "Contributing to the project": [[8, "contributing-to-the-project"]], "Issue or Discussion?": [[8, "issue-or-discussion"]], "Code coverage": [[8, "code-coverage"]], "Developer guide": [[8, "developer-guide"]], "Run linting using pre-commit": [[9, "run-linting-using-pre-commit"]], "Running pre-commit": [[9, "running-pre-commit"]], "Fixing issues": [[9, "fixing-issues"]], "VSCode support": [[9, "vscode-support"]], "Make a release": [[10, "make-a-release"]], "Run the tests using pytest": [[11, "run-the-tests-using-pytest"]], "Skip the message bus tests": [[11, "skip-the-message-bus-tests"]], "Run static analysis using mypy": [[12, "run-static-analysis-using-mypy"]], "Update the tools": [[13, "update-the-tools"]], "Developer Guide": [[14, "developer-guide"]], "Tutorials": [[14, null], [23, null]], "How-to Guides": [[14, null], [23, null]], "Explanations": [[14, null], [23, null]], "Reference": [[14, null], [23, null]], "Standards": [[15, "standards"]], "Code Standards": [[15, "code-standards"]], "Documentation Standards": [[15, "documentation-standards"]], "Developer install": [[16, "developer-install"]], "Clone the repository": [[16, "clone-the-repository"]], "Install dependencies": [[16, "install-dependencies"]], "See what was installed": [[16, "see-what-was-installed"]], "Build and test": [[16, "build-and-test"]], "Run in a Developer Environment": [[17, "run-in-a-developer-environment"]], "Start ActiveMQ": [[17, "start-activemq"]], "Start Bluesky Worker": [[17, "start-bluesky-worker"]], "API Index": [[18, "api-index"]], "blueapi": [[19, "blueapi"], [24, "blueapi"]], "How the documentation is structured": [[19, "how-the-documentation-is-structured"]], "About the documentation": [[20, "about-the-documentation"]], "Configure the application": [[21, "configure-the-application"]], "Run in a container": [[22, "run-in-a-container"]], "Starting the container": [[22, "starting-the-container"]], "User Guide": [[23, "user-guide"]], "API": [[24, "module-blueapi"]], "Messaging Specification": [[25, "messaging-specification"]], "REST Specification": [[26, "rest-specification"]], "Installation": [[27, "installation"]], "Check your version of python": [[27, "check-your-version-of-python"]], "Create a virtual environment": [[27, "create-a-virtual-environment"]], "Installing the library": [[27, "installing-the-library"]]}, "indexentries": {"blueapi": [[24, "module-blueapi"]], "blueapi.__version__ (in module blueapi)": [[24, "blueapi.blueapi.__version__"]], "module": [[24, "module-blueapi"]]}})