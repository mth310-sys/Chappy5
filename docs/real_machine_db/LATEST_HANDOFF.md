更新日: 2026-09-13

## 現在地点
- recordCount: **1540**
- latestRecordAdded: **パチスロ 真俺の空 — No.1540**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-12-19_shin-ore-no-sora.md`
- chronologicalFrontier: **2022-12-19**
- frontierLatestMachine: **パチスロ 真俺の空 — No.1540**
- schema: **resetBehavior v0.7**
- status: **2022-12-19_GROUP_OPEN_1_OF_4_KNOWN / NEXT_MORE_CHIBARIYO_30**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1539 `パチスロ 這いよれ！ニャル子さん` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり、最新handoffとmain実レコードを進捗正本として採用。
- main正本はNo.1539まで進行済み、2022-12-05群CLOSEDだったため、次の未処理 `パチスロ 真俺の空` をNo.1540として性能コア + resetBehavior v0.7で追加。
- 製造元スパイキー、総発売元フィールズ、正式型式 `S真俺の空ST`。公安委員会系検定情報で検定番号 `2S1075` を確認。
- 2022-12-19実導入。GreenBelt実導入記事、G-net販売概要、複数解析で一致。
- 主要複数解析は設定構成 L / 1 / 3 / 4 / 5 / 6、機械割97.6 / 99.2 / 104.2 / 109.5 / 110.0%、CZ 1/196.8→1/177.5、AT 1/293.2→1/162.7、約33G/50枚、純増約2.6枚/Gで一致。
- 一部資料だけ99.2%・CZ1/190.0・AT1/280.1を「設定2」と表記するため、設定番号のみ `CONFLICT_SOURCE_LABEL` とし、主要複数解析一致の設定3をcanonical採用。
- 通常最大天井999G+α。解析上モードは通常999G / チャンス256G / 天国99G / 超天国32G。
- 設定変更時は有利区間・天井・内部状態・モードRESET、据え置きはCARRY_OVERをなな徹で確認。
- 純電源OFF→ONは天井・内部状態CARRY_OVERをちょんぼりすたで確認。モード / 有利区間は純電断単独の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の固定天井短縮、モード振り分け率、AT/CZ優遇率は高信頼資料で固定できず、推測補完していない。
- 朝一攻略二次資料はリセット朝一100G以内AT期待度約30%とするが、なな徹は通常時共通の各種抽選込み100G以内約30%としているため、数値は保持しつつ `NOT_CONFIRMED_AS_RESET_EXCLUSIVE` とした。
- 設定変更判別は高信頼解析で調査中。有利区間ランプ判別不可。本機固有ガックンは検索語・資料系統を変えて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1540 — パチスロ 真俺の空
- manufacturer: **スパイキー（総発売元: フィールズ）**
- formalModel: **S真俺の空ST**
- inspectionCode: **2S1075**
- releaseDate: **2022-12-19**
- generation/system: **6.5号機 / メダルAT / ゲーム数上乗せ + 擬似ボーナス / 上位AT搭載**
- payoutRate: **設定1 97.6 / 設定3 99.2 / 設定4 104.2 / 設定5 109.5 / 設定6 110.0%**
- CZ: **1/196.8 / 1/190.0 / 1/179.4 / 1/172.2 / 1/177.5**
- AT: **1/293.2 / 1/280.1 / 1/253.5 / 1/230.1 / 1/162.7**
- baseGamesPer50: **約33G/50枚**
- netIncrease: **約2.6枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_RESET_SPECIFIC_MODE_NUMBERS**
- confidence: **HIGH core / HIGH setting-change-and-carryover reset core / HIGH inspectionCode / MEDIUM publicMorningNumbers definition / some pure-power-cycle fields and gackun UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — No.1540
- **設定変更**: 有利区間・天井/規定G数・内部状態・モードRESET。
- **据え置き**: 有利区間・天井/規定G数・内部状態・モードCARRY_OVER。
- **純電源OFF→ON**: 天井・内部状態CARRY_OVER確認。モード / 有利区間は直接契約未固定。
- **ゲーム数/天井**: 最大999G+α。モード別最大は999 / 256 / 99 / 32G。
- **設定変更専用天井短縮**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **設定変更時モード振り分け**: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **有利区間**: 設定変更RESET / 据え置きCARRY_OVER。有利区間ランプで変更判別不可。
- **朝一恩恵**: 高信頼解析では追加恩恵調査中。朝一攻略二次資料に100G以内AT期待度約30%あり。ただし通常共通約30%との定義差がありreset-exclusive確定にはしない。
- **朝一不利**: 前日天井進行・内部状態・モードを失う。追加専用不利なし。
- **変更判別**: 調査中 / 有利区間ランプ不可 / 本機固有ガックン未固定。

## 2022-12-05群 — CLOSED 3/3 canonical actual launch
1. **HEY！エリートサラリーマン鏡（パオン・ディーピー）** — No.1537 済
2. **パチスロ幼女戦記（サミー）** — No.1538 済
3. **パチスロ 這いよれ！ニャル子さん（EXCITE）** — No.1539 済

## 2022-12-19群 — OPEN 1/4 known
1. **パチスロ 真俺の空（スパイキー）** — No.1540 済
2. **もっと！チバリヨ-30（NET）** ← No.1541候補 / 次回最優先
3. **沖ドキ！GOLD（ユニバーサルブロス / 25Φ）**
4. **沖ドキ！GOLD-30（ミズホ / 30Φ）**

- 沖ドキ！GOLD 25Φ / 30Φは別型式・別メーカー名義として一覧上独立しているため、性能同一の可能性があっても自動統合せず個別確認する。
- 3機処理後、PB・派生・地域先行・延期/段階導入まで横断監査して12/19群のCLOSED可否を判定する。

## 今回の主要資料
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/21900/nippon
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/22191/nippon
- GreenBelt / P-WORLD: https://news.p-world.co.jp/articles/22549/greenbelt
- G-net販売概要: https://g-net-ps.com/info/s0048/
- G-net検定情報: https://g-net-ps.com/industry/certif-2022-1014/
- 鹿児島県公報: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/2206/documents/101788_20221017131346-1.pdf
- ゼンリン検定情報: https://zenrin-net.com/kenteis/listsend?machinesort_id=2&order_date=2025
- なな徹総合: https://nana-press.com/kaiseki/machine/475/
- なな徹天井: https://nana-press.com/kaiseki/machine/475/12879/
- なな徹AT: https://nana-press.com/kaiseki/machine/475/12886/
- 一撃設定判別: https://1geki.jp/slot/s_shin_orenosora/0/
- 一撃ベース: https://1geki.jp/slot/s_shin_orenosora/4/
- Pachiseven: https://pachiseven.jp/machines/6658/cutout/4
- ちょんぼりすた: https://chonborista.com/slot/spiky/176383/
- フリック7: https://flick7.net/slot/reset_guide2022.php
- ぱちんこキュレーション: https://pachinko-curation.com/?p=34440

## 保存コミット
- No.1540追加: `100b0ca5668bc6391b8c91d9d43d6f6ddbce3b75`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1541候補 `もっと！チバリヨ-30`（2022-12-19）から性能コア + resetBehavior v0.7を収集する。その後 `沖ドキ！GOLD` → `沖ドキ！GOLD-30` の順に型式・導入実績を確認しつつ処理し、PB・派生・地域先行・延期/段階導入まで再監査して2022-12-19群のCLOSED可否を判定する。**
