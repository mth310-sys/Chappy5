# パチスロ 魔法少女育成計画

recordNo: 1528
machineName: パチスロ 魔法少女育成計画
manufacturer: カルミナ / ネット
formalModel: SまほいくNB
inspectionCode: 2S0722
releaseDate: 2022-10-17
generation: 6.5号機
systemType: A+ART / 技術介入 / 完走型ART

## payoutRateBySetting
### 市場予測 / 通常条件
- 設定1: 97.7%
- 設定2: 97.8%
- 設定3: 100.3%
- 設定4: 102.2%
- 設定5: 104.3%
- 設定6: 106.1%

### 完全攻略時
- 設定1: 102.5%
- 設定2: 103.8%
- 設定3: 104.6%
- 設定4: 106.0%
- 設定5: 107.0%
- 設定6: 107.2%

通常条件と完全攻略時は定義が異なるため別系列として保持し、平均化しない。
信頼度: ANALYSIS_HIGH / INDUSTRY

## initialHitBySetting
### ART初当り
- 設定1: 1/243.3
- 設定2: 1/237.3
- 設定3: 1/230.6
- 設定4: 1/224.0
- 設定5: 1/216.9
- 設定6: 1/211.8

### ボーナス合算
- 設定1: 1/189
- 設定2: 1/188
- 設定3: 1/187
- 設定4: 1/185
- 設定5: 1/183
- 設定6: 1/252

### ボーナス内訳
- Master Cranberry BONUS（同色BIG）: 全設定 1/1638
- 異色BIG: 設定1 1/493 / 2 1/489 / 3 1/485 / 4 1/478 / 5 1/471 / 6 1/683
- REG: 設定1 1/379 / 2 1/377 / 3 1/374 / 4 1/370 / 5 1/366 / 6 1/529

信頼度: ANALYSIS_HIGH

## baseGamesPer50
- 約36.7G/50枚（設定1目安）。

信頼度: ANALYSIS_HIGH

## netIncrease
- ART純増は設定依存。
- 設定1: 約0.60枚/G
- 設定2: 約0.59枚/G
- 設定3: 約0.56枚/G
- 設定4: 約0.53枚/G
- 設定5: 約0.50枚/G
- 設定6: 約0.25枚/G

メーカー/業界紹介の「約0.6枚/G」は主に設定1基準。本DBでは設定差を持つ実解析値を併記する。
信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- Master Cranberry BONUS（同色BIG）: 203枚。
- 異色BIG: 182枚。
- REG: 49枚。
- ART「EPISODE ART」: 1セット20G / 40G / 100Gの完走型。
- CZ「まほいくとらいある」中の技術介入成功でART初期40G、失敗時20Gが基本。条件により100Gも存在。
- ART中ボーナス成立時はARTゲーム数を消化後に放出する完走型。

信頼度: ANALYSIS_HIGH / INDUSTRY

## modeSpecificMinimumData
- CZ「まほいくとらいある」: ボーナス終了後、ART終了後、通常時300G消化後などで突入。
- CZ間ゲーム数天井: CZ転落後300GでCZ突入。
- ボーナス/ART非当選のまま周期を重ねた場合、最大3周期目で「レイジングゾーン」当選濃厚。
- レイジングゾーン発動周期振り分け: 2周期目12.5% / 3周期目87.5%（有利区間滞在が条件）。
- レイジングゾーン突入時はARTストックとマジカルアイコンを獲得する強力な救済区間。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_COUNTER_DEFINITION_CONFLICT_RESOLVED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 内部モード/内部状態RESET。
- フリーズ高確率状態RESET。
- キャンディー獲得数RESET。
- **周期天井の「現在周期内ゲーム数」は引き継ぐ解析が高信頼資料で一致し、周期数カウントはRESET。**
- 「天井RESET」とだけ記す古い整理資料もあるため、単純な全ゲーム数RESETとは扱わない。詳細は conflicts を参照。
- 開始ステージは魔法少女ステージ（スノーホワイト）。

### carryOverBehavior
- 据え置きでは、設定変更処理を行わないため周期内ゲーム数・周期数・内部状態/モード・フリーズ高確・キャンディー獲得状況を引き継ぐ側として扱う。
- 純電源OFF→ON資料で各要素の引継ぎが明記されており、据え置き運用時の基本CARRY_OVER根拠とする。
- 液晶表示は電源OFF→ONでリセットされる要素があり、表示値と内部値を混同しない。

### powerCycleBehavior
- 純電源OFF→ON: 周期天井ゲーム数CARRY_OVER（表示はRESET）。
- 周期数CARRY_OVER。
- フリーズ高確率CARRY_OVER（表示はRESET）。
- キャンディー獲得数CARRY_OVER（表示はRESET）。
- 内部状態/モードCARRY_OVER。
- 有利区間CARRY_OVER。
- 通常時は魔法少女ステージ（スノーホワイト）から表示上開始。ただしCZ/ART/ボーナス中の電断復帰は当該状態を引き継ぐ解析あり。

### gameCounterReset
- 設定変更: **周期内ゲーム数CARRY_OVER / 周期数RESET**。
- 据え置き: 周期内ゲーム数・周期数ともCARRY_OVER。
- 純電源OFF→ON: 周期内ゲーム数・周期数ともCARRY_OVER。ただし表示上ゲーム数はRESETされる。
- 旧資料の「天井RESET」は有利区間/周期数初期化を一括表現した可能性があり、1G単位の周期内カウンタまでRESETと解釈しない。

### ceilingAfterReset
- CZ間天井: CZ転落後300G。
- 救済天井: ボーナス/ART非当選のまま最大3周期（最大約900G+α）でレイジングゾーン。
- 設定変更では周期数がRESETされる一方、現在周期内ゲーム数はCARRY_OVERするため、「リセットで300Gを最初からやり直す」挙動ではない。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更: 内部モードRESET/再選択。
- 据え置き・純電源OFF→ON: CARRY_OVER。
- 設定変更専用のモード振り分け数値は、複数検索語・資料系統を変えて再探索したが `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 内部状態、フリーズ高確率、キャンディー獲得数RESET。
- 据え置き・純電源OFF→ON: CARRY_OVER。
- 設定変更後の具体的な高確移行率や固定高確は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- ボーナス終了後またはART終了後のCZ「まほいくとらいある」転落時にも有利区間がリセットされる。
- 有利区間ランプ非搭載のため、ランプで設定変更/据え置きを視認判別できない。

### resetBenefits
- 設定変更時は周期数がRESETされるが、周期内ゲーム数は引き継ぐ。
- 固定高モード、短縮天井、朝一CZ確定などの設定変更専用プラス恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 導入直後の実戦/攻略整理でも「リセット恩恵なし」「リセット狙い向きではない」とされ、機械仕様として比較可能な朝一優遇率は確認できない。

### resetPenalties
- 周期数がRESETされるため、前日から積み上げた2周期/3周期救済への進行は設定変更で失われる。朝一客視点では宵越し救済狙いに対する不利要素となる。
- それ以外の設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のためランプ判別不可。
- 設定変更・純電源OFF→ONとも通常時の見た目はスノーホワイトステージ開始となり、開始ステージ単独では設定変更判別不可。
- 電断後は液晶上のゲーム数/フリーズ高確/キャンディー表示がリセットされる一方、内部値は引き継ぐため、表示のみを設定変更根拠にしない。
- 本機固有のリールガックン条件/発生率は、機種名・型式・メーカー・「ガックン/リール始動/設定変更判別」を組み替えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時の周期内ゲーム数: CARRY_OVER。
- 設定変更時の周期数: RESET。
- 設定変更専用モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用CZ/ART当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一固定高確率/恩恵発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更専用の比較可能なモード振り分け・CZ/ART当選率・恩恵発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 2周期目12.5% / 3周期目87.5%のレイジングゾーン振り分けは通常救済仕様であり、設定変更専用数値ではないため朝一専用値に転用しない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `魔法少女育成計画 / まほいく / SまほいくNB / SまほいくNBA / 2S0722 / カルミナ / ネット` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 周期 / 天井 / ゲーム数引継ぎ / モード / 状態 / キャンディー / フリーズ高確 / ガックン / 有利区間` を組み替えて再探索。
- カルミナ公式、業界ニュース、公安委員会検定資料、K-Navi、一撃、スロパチクエスト、Altema、NanaPress、ちょんぼりすた、イチカツ、当時導入直後実戦整理を横断。
- 後年更新された一撃の詳細比較表とAltemaが、設定変更時の「ゲーム数引継ぎ・周期数RESET」で一致。旧スロパチクエストの「天井RESET」は粒度が粗く、競合を平均せず定義差として保持。

## conflicts
### 導入日
- canonical: **2022-10-17**。
- K-Navi、一撃、イチカツ、ちょんぼりすた、導入直後実戦記事など複数資料が10/17で一致。
- Greenbeltの2022-10-03更新スケジュールでは10/3導入欄に掲載。
- ALL7の導入予定一覧では2022/10/07表記。
- メーカー公式は2022.10までの月表記。
- 予定表/更新時点差・地域差の可能性があるため、実導入のcanonicalは10/17とし、10/3・10/7を `CONFLICT_RELEASE_SCHEDULE` として保持する。

### reset天井表現
- スロパチクエスト旧整理: 設定変更時「天井リセット」。
- 一撃詳細解析/Altema: 設定変更時も通常時ゲーム数・周期天井ゲーム数は引き継ぎ、周期数のみRESET。
- 粒度の細かい後年解析が複数一致するため、canonicalは **周期内ゲーム数CARRY_OVER / 周期数RESET**。旧「天井RESET」は有利区間/救済周期の初期化をまとめた表現としてCONFLICT注記を残す。

### 型式表記
- 公式/公安委員会: `SまほいくNB`。
- 一部検定速報記事: `SまほいくNBA`。
- 公安委員会告示・メーカー公式を優先し `SまほいくNB` をcanonical、`SまほいくNBA` を速報表記差として保持。

## missingFields
- 設定変更専用モード振り分け
- 設定変更後の具体的な内部高確/状態振り分け
- 設定変更専用CZ/ART当選率・恩恵発生率
- 本機固有ガックン条件/発生率

## sources
取得日: 2026-09-13

1. カルミナ株式会社 — 2022年リリース
   - https://carmina-gaming.co.jp/product/release/2022/
   - 製品、2022.10、型式 `SまほいくNB`、製造ネットを確認。
   - reliability: OFFICIAL
2. PiDEA X — 東京都公安委員会検定通過状況（2022-09-20告示）
   - https://www.pidea.jp/articles/1663809222
   - `SまほいくNB`、検定番号 `2S0722`、ネット株式会社を確認。
   - reliability: INDUSTRY / PUBLIC_RECORD
3. 広島県公安委員会告示第57号
   - https://www.pref.hiroshima.lg.jp/soumu/kenpo-pdf/2022/t068/2022-t068-029.pdf
   - 型式 `SまほいくNB`、検定番号2S0772表記の公的告示を確認。東京都告示2S0722と番号差があるため要注意（本文canonicalは東京都PiDEA掲載2S0722）。
   - reliability: PUBLIC_RECORD / CONFLICT
4. P-WORLD業界ニュース / 遊技日本
   - https://news.p-world.co.jp/articles/21678/nippon
   - 6.5号機第1弾、A+ART、型式、基本スペック、純増を確認。
   - reliability: INDUSTRY
5. K-Navi
   - https://p-kn.com/slot/3851/
   - 2022-10-17導入、ボーナス獲得枚数、ART概要を確認。
   - reliability: ANALYSIS_HIGH
6. 一撃
   - https://1geki.jp/slot/s_mahoiku/
   - https://1geki.jp/slot/s_mahoiku/4/
   - https://1geki.jp/slot/s_mahoiku/5/
   - 通常/完全攻略機械割、ART/ボーナス確率、天井、有利区間、設定変更/電源OFF→ON詳細を確認。
   - reliability: ANALYSIS_HIGH
7. Altema
   - https://altema.jp/pachimo/mahoiku
   - 設定変更時ゲーム数引継ぎ・周期数RESET、内部状態/有利区間/モード、電断時引継ぎを照合。
   - reliability: ANALYSIS_HIGH
8. スロパチクエスト
   - https://www.slopachi-quest.com/article/mahoshojoikuseikeikaku-tenjou/
   - 旧整理の設定変更/電断比較、有利区間ランプ・リセット恩恵調査状況を確認。天井RESET表記は後年詳細解析とCONFLICT扱い。
   - reliability: ANALYSIS_SINGLE / CONFLICT
9. NanaPress
   - https://nana-press.com/kaiseki/machine/441/12143/
   - ART初当り、設定別ART純増、ART構造を照合。
   - reliability: ANALYSIS_HIGH
10. イチカツ
   - https://ichikatsu.com/mahoiku/
   - 2022-10-17導入、約36.7G/50枚、機械割、天井構造を確認。
   - reliability: ANALYSIS_HIGH
11. Greenbelt / P-WORLD業界ニュース — 2022-10-03更新新台スケジュール
   - https://news.p-world.co.jp/articles/21806/greenbelt
   - 10/3導入欄に本機掲載、10/17欄にはダンまち外伝のみ。導入日CONFLICT根拠。
   - reliability: INDUSTRY / CONFLICT
12. ALL7.jp — 2022年10月導入予定一覧
   - https://www.all7.jp/plans/index/2022/10
   - 本機を2022/10/07導入予定と掲載。導入日CONFLICT根拠。
   - reliability: SECONDARY / CONFLICT
13. けんのスロットシミュレーション
   - https://kenslo65536.com/kaiseki/mahouiku.html
   - 機械割、完全攻略値、ART/ボーナス確率、最大3周期天井を照合。
   - reliability: ANALYSIS_SINGLE

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_COUNTER_DEFINITION_CONFLICT_RESOLVED
- confidence: OFFICIAL / INDUSTRY / PUBLIC_RECORD / ANALYSIS_HIGH
