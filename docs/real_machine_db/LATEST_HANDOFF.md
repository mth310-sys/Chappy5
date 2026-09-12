更新日: 2026-09-12

## 現在地点
- recordCount: **1500**
- latestRecordAdded: **パチスロ ピンクパンサーSP — No.1500**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-06-06_pachislot-pink-panther-sp.md`
- chronologicalFrontier: **2022-06-06**
- frontierLatestMachine: **パチスロ ピンクパンサーSP — No.1500**
- schema: **resetBehavior v0.7**
- status: **2022-06-06_GROUP_OPEN_1_OF_3_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、既存末尾No.1499を確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- mainは前回会話上のNo.1495より先へ進んでおり、No.1499 `パチスロ ゼーガペイン2` 後のhandoffから継続した。
- No.1500 `パチスロ ピンクパンサーSP` を追加。2022-06-06実導入を山佐ネクスト導入告知、業界記事、複数解析で照合。
- 正式型式は `SピンクパンサーSPXX`。製造元は山佐、販売・ブランドは山佐ネクスト。1Sxxxx形式の検定番号は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 性能コアは設定1/4/5/6、BIG 1/278.9→1/274.2、REG 1/374.5→1/307.7、合算1/159.8→1/145.0、約40G/50枚、BIG175枚、REG40枚、ART純増約0.3枚/Gを固定。`COMPLETE_CORE`。
- 技術介入機械割は定義を分離し、全失敗97.2/98.6/99.5/101.1%、60%成功99.4/101.0/102.2/104.1%、完全攻略103.2/104.4/105.6/107.3%。99.4等を単に「機械割」と書く資料もあるため `DEFINITION_LABEL_DIFFERENCE` として保持し平均化していない。
- resetBehaviorは通常天井・ゾーン非搭載、朝一リセット恩恵「特になし」を複数資料で確認。短縮天井・朝一専用モード・朝一専用当選率は `NOT_APPLICABLE / NONE_CONFIRMED`。
- 一方、設定変更/据え置き/純電源OFF→ONそれぞれのRT/ART内部状態・ART残りG・有利区間・成立済みボーナスの機種固有契約は、型式・メーカー・設定変更/リセット/朝一/電源/RT/ART/有利区間へ検索語を変更しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。一般的6.2号機挙動から補完していない。
- 本機固有ガックン、初期液晶表示等による確定変更判別も再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間移行時のART規定ゲーム上限2900G/456G抽選は設定差として確認したが、設定変更専用の朝一恩恵ではないためresetBenefitsには混入していない。

## No.1500 — パチスロ ピンクパンサーSP
- path: `docs/real_machine_db/machines/2022-06-06_pachislot-pink-panther-sp.md`
- manufacturer: **山佐ネクスト（製造元: 山佐）**
- formalModel: **SピンクパンサーSPXX**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-06-06**
- generation/system: **6.2号機 / A+RT+ART / 技術介入**
- settings: **1 / 4 / 5 / 6**
- BIG: **1/278.9 / 1/277.7 / 1/275.4 / 1/274.2**
- REG: **1/374.5 / 1/358.1 / 1/334.4 / 1/307.7**
- bonus合算: **1/159.8 / 1/156.4 / 1/151.0 / 1/145.0**
- payoutRate(60%技術介入): **99.4 / 101.0 / 102.2 / 104.1%**
- payoutRate(完全攻略): **103.2 / 104.4 / 105.6 / 107.3%**
- payoutRate(技術介入全失敗): **97.2 / 98.6 / 99.5 / 101.1%**
- baseGamesPer50: **約40G/50枚（設定1）**
- netIncrease: **ART約0.3枚/G**
- normalCeiling: **NONE**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_NON_IMPACTFUL_MORNING**
- confidence: **HIGH_CORE / MEDIUM_RESET_NEGATIVE_FINDING**

### resetBehavior v0.7 — No.1500
- **設定変更**: 天井非搭載。朝一専用恩恵はNONE_CONFIRMED。RT/ART内部状態・有利区間の機種固有処理はUNVERIFIED_AFTER_RESEARCH。
- **据え置き**: 天井G数はNOT_APPLICABLE。RT/ART内部状態・残りG・有利区間の厳密CARRY_OVER契約はUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: RT/ART内部状態・残りG・有利区間・成立済みボーナスの機種固有契約はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 天井・通常時ゾーン非搭載。
- **天井短縮**: NOT_APPLICABLE。
- **モード/状態**: 朝一専用モード・朝一高確等はNONE_CONFIRMED。
- **有利区間**: 使用あり。有利区間移行時にART規定ゲーム数2900G/456Gを抽選するが、設定変更専用値ではない。設定変更/据え置き/純電断の個別契約はUNVERIFIED_AFTER_RESEARCH。
- **朝一恩恵/不利**: 主要恩恵・不利ともNONE_CONFIRMED。
- **変更判別**: 本機固有ガックン・初期表示等はUNVERIFIED_AFTER_RESEARCH。公開された主要朝一判別法はNONE_CONFIRMED。
- **公開朝一数値**: NONE_CONFIRMED。

## 2022-06-06群 — OPEN
横断監査で現時点確認している既知3機種:
1. `パチスロ ピンクパンサーSP` — **No.1500 処理済み**
2. `Sキャッツ・アイ` — **次回No.1501候補**
3. `シリウス`（ヤーマ） — **No.1502候補**

- 2022-05-24〜06-05境界には現時点で独立実導入を確認できず、6/6群へ前進。
- 次回はNo.1501候補 `Sキャッツ・アイ` を性能コア＋resetBehavior v0.7で処理。
- その後 `シリウス` を処理し、PB・別型式・地域先行・延期/段階導入まで6/6群を再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）。
- 性能側 `coreStatus: COMPLETE_CORE` は維持。
- reset側は **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）**。今回カーソルは変更していない。

## 次回本線の再開地点
- **No.1501候補 `Sキャッツ・アイ` — 2022-06-06。**
- その後 `シリウス` を処理し、6/6群を再監査。

## GitHub保存
- No.1500追加 commit: `effa09f0fc37af54235829b917e20aa59e4c089d`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1500 パチスロ ピンクパンサーSP
- https://news.p-world.co.jp/articles/20084/nippon
- https://news.p-world.co.jp/articles/20279/yugitsushin
- https://news.p-world.co.jp/articles/20664/nippon
- https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%83%8D%E3%82%AF%E3%82%B9%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%83%94%E3%83%B3%E3%82%AF%E3%83%91%E3%83%B3%E3%82%B5%E3%83%BCs/
- https://nana-press.com/kaiseki/machine/365/9170/
- https://nana-press.com/kaiseki/machine/365/9759/
- https://chonborista.com/slot/yamasa-slot/167375/
- https://1geki.jp/slot/s_pinkpanther_sp/3/
- https://1geki.jp/slot/s_pinkpanther_sp/85/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/07/kh01.php
- https://www.p-world.co.jp/machine/database/9632
- https://ichikatsu.com/newslot2022/
