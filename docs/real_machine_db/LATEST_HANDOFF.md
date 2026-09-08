更新日: 2026-09-09

## 現在地点
- recordCount: **1042**
- latestRecordAdded: **パチスロ ソウルキャリバー**（山佐）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-01-30_soul-calibur.md`
- chronologicalFrontier: **2017-01-30**
- frontierLatestMachine: **パチスロ ソウルキャリバー — No.1042**
- schema: **resetBehavior v0.7**
- status: **2017-01-30_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1041実レコードを再取得して開始。
- 旧INDEXは19件表示のままのため進捗正本にせず、README規定どおり最新 `LATEST_HANDOFF.md` と実レコードを優先。
- 開始時main正本は **1041件 / chronologicalFrontier 2017-01-30 / 1/30群OPEN**。
- handoff指定の次未処理 **山佐「パチスロ ソウルキャリバー」** をNo.1042として登録。
- 山佐公式、4Gamerのメーカー発表転載、P-WORLD、ちょんぼりすた、期待値見える化、すろぱちくえすと、5号機クロニクル、当時解析、中古実機資料を横断し、性能コアとresetBehavior v0.7を同時収集。
- 設定1機械割97.6% / 97.2%は平均せずCONFLICT。型式は市場実機資料の `パチスロソウルキャリバー/HH` をcanonicalとし、初期解析に残る `/FF` 表記差を注記。
- 2017-01-30群はまだ未処理候補があるためCLOSEDにしない。

## No.1042 — パチスロ ソウルキャリバー
- manufacturer: **山佐**
- releaseDate canonical: **2017-01-30**
- formalModelName: **パチスロソウルキャリバー/HH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART / CZ+ゲーム数上乗せART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **設定1 CONFLICT 97.6% / 97.2%、設定2〜6 98.5 / 100.2 / 105.7 / 110.8 / 116.2%**。
- BIG: **1/381.02 / 381.02 / 381.02 / 364.09 / 356.17 / 341.33**。
- REG: **1/589.79 / 579.37 / 569.50 / 508.17 / 492.87 / 465.17**。
- ART初当たり: **1/369.40 / 358.49 / 332.47 / 273.76 / 211.18 / 163.73**。
- baseGamesPer50: **約34G/50枚**。
- ART純増: **約1.5枚/G**。
- ソウルボーナス: **約157枚**、REG/アルゴル: **約53枚**。
- ART「ソウルディメンション」: **1セット50G+α**。
- 通常天井: ボーナス間 **777 / 999 / 1111G**をほぼ1/3ずつ。途中ARTでは天井進捗をリセットしない。

### resetBehavior v0.7
- settingChangeBehavior: **天井進捗RESET / 天井777G固定 / 内部状態RESELECT**。
- carryOverBehavior: 本機固有の据え置き直接比較契約は十分な再探索後も **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。
- powerCycleBehavior: 当時比較表でも電源ON・OFF側は調査中。後年資料まで再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 設定変更RESET。据え置き/純電断は直接根拠不足のため推測しない。
- ceilingAfterReset: **777G 100%**。通常最大1111Gから短縮。
- modeAfterReset: リセット専用独立モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: **低確50.00% / 高確A31.25% / 高確B12.50% / 高確C6.25%**、高確以上50.0%。高確G数は **20G 50.0% / 30G 31.25% / 50G 12.5% / 100G 6.25%、平均31.88G**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: **777G固定短縮天井＋50%高確以上スタート**。
- resetPenalties: 前日天井進捗は設定変更で消失。その他専用不利はNONE_CONFIRMED。
- resetDetection: ボーナス非当選のまま777G超過なら設定変更後777G固定と矛盾するため据え置き判断材料。本機固有ガックン契約は **UNVERIFIED**。

### data quality
- 導入日は山佐公式の2017年1月と、4Gamer掲載山佐発表文の「ホールデビューに合わせて2017-01-30配信」、複数当時解析を合わせて2017-01-30に固定。
- 型式HHは実機市場資料で確認。検定番号は表記揺れ・FF/HH・6S・検定通過等へ検索を変えても直接固定できず推測しない。
- 設定1機械割のみ複数資料で97.6/97.2が割れるためCONFLICT保持。
- リセット天井777G固定、状態振り分け、高確G数は複数解析で照合。
- 据え置き/純電断の直接契約は一般論から補完しない。

## 境界監査
- **2017-01-30_GROUP_OPEN**。
- 登録済み:
  - SLOTスターオーシャン4 — No.1041
  - パチスロ ソウルキャリバー — No.1042
- 未処理確認済み候補:
  - **オアシスデイズ**（パイオニア） — 2017-01-30。既handoffでHAZUSE/2-9伝説一致、型式 `オアシスデイズ/DX`、検定番号 `6S1149` を先行確認済み。
  - **ニューペガサスREVIVAL**（エマ） — 導入日を複数系統で再固定してから登録判断する。
- 上記後に1/30同日全メーカー監査を行い、漏れがなければCLOSEDへ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 新規本線を止めず、既存未QAレコードを最新main実体から順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1042を再取得。
2. **1042件 / chronologicalFrontier 2017-01-30 / 1/30群OPEN** を正本として継続。
3. 次の未処理機種は **パイオニア「オアシスデイズ」** をNo.1043候補として処理。
4. 性能コア＋resetBehavior v0.7を同時収集。設定変更/据え置き/純電断、ゲーム数/天井、状態、朝一恩恵、ガックン/変更判別を表記揺れと資料系統を変えて再探索する。
5. オアシスデイズ後、**ニューペガサスREVIVAL候補 → 1/30同日全メーカー監査** の順で確認。
6. 既登録No.1042以前を重複追加しない。

## 主要出典 — 取得日 2026-09-09
### No.1042 パチスロ ソウルキャリバー
- 山佐ネクスト公式: https://yamasa-next.co.jp/model_sc/
- 4Gamer / 山佐発表転載: https://www.4gamer.net/games/370/G037006/20170130057/
- P-WORLD: https://www.p-world.co.jp/machine/database/8242
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/29992/
- 期待値見える化: https://slotjin.com/zone/soulcalibur/
- すろぱちくえすと機種解析: https://www.slopachi-quest.com/kisyubetsu/soul-calibur/
- すろぱちくえすと設定解析: https://www.slopachi-quest.com/article/soul-calibur-settei/
- 5号機クロニクル: https://5goki.com/yamasa
- 中古実機資料 / 型式HH: https://item.rakuten.co.jp/auc-nakaiti/souru/
- すろかい / FF-HH表記差: https://slotkaiseki.hatenablog.com/entry/soulcalibur

### 次回候補
- HAZUSE / オアシスデイズ: https://hazuse.com/machine/pachislot/6S1149/
- 2-9伝説 / オアシスデイズ: https://29den.com/oasisdays/
