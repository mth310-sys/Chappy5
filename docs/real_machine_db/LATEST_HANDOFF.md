更新日: 2026-09-13

## 現在地点
- recordCount: **1506**
- latestRecordAdded: **パチスロ アクエリオン ALL STARS — No.1506**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-07-04_pachislot-aquarion-all-stars.md`
- chronologicalFrontier: **2022-07-04**
- frontierLatestMachine: **パチスロ アクエリオン ALL STARS — No.1506**
- schema: **resetBehavior v0.7**
- status: **2022-07-04_GROUP_OPEN_4_OF_5_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1505 `パチスロ犬夜叉` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機種 No.1506 `パチスロ アクエリオン ALL STARS`（SANKYO、2022-07-04）を性能コア＋resetBehavior v0.7で追加。
- SANKYO公式オンライン博物館で販売名/型式 `SアクエリオンD R`、2022.07、設定別CZ/AT、SANKYO初6.5号機、AT純増約2.5枚/Gを確認。HAZUSEで検定番号 `2S0131` を照合。
- 設定構成はL/1/2/4/5/6。機械割L 81.6%、1 96.8%、2 98.7%、4 103.0%、5 105.4%、6 108.3%。CZ 1/220→1/159、AT 1/393→1/289、ベース約33.9G/50枚、AT純増約2.5枚/G。
- AT初回セットはエクスタシーチャンスで70G以上、2セット目以降30G以上。通常ゲーム数天井は液晶1000G+αでAT、CZ間700GでCZ、CZ最大4スルー後の5回目CZでAT濃厚。
- resetBehaviorは設定変更で有利区間・天井・内部モード/状態RESET。据え置きおよび純電源OFF→ONではCARRY_OVERをHAZUSE / NanaPress / イチカツ等で照合。
- 設定変更後は高確スタート。設定変更時/AT終了時にゲーム数テーブルとCZスルー回数天井を再抽選。設定変更後またはAT終了後1G目レア小役はCZ/AT直撃のチャンス。
- 有利区間ランプは非搭載。朝一液晶上部ゲーム数は変更/据え置きとも隠され、前兆後に復帰した表示G数とデータカウンターの一致/不一致が変更/据え置き判別材料となる。
- 公開テーブル選択率 A/B/C/D/E/天国 = 56.0/21.2/11.6/7.1/3.1/1.0% は設定変更時とAT終了時等を含むトータル値であり、リセット専用振り分けへ転用していない。
- 設定変更専用の設定別テーブル振り分け、高確内部率/保証G数、1G目レア小役時CZ/AT当選率、固有ガックン、朝一特定G以内AT/CZ率は検索語・資料系統を変えて再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 純増はSANKYO公式/HAZUSE/必勝本等の約2.5枚/Gをcanonical。イチカツの約2.8枚/Gを `SECONDARY_CONFLICT` として保持。

## No.1506 — パチスロ アクエリオン ALL STARS
- path: `docs/real_machine_db/machines/2022-07-04_pachislot-aquarion-all-stars.md`
- manufacturer: **SANKYO**
- formalModel: **SアクエリオンD R**
- inspectionCode: **2S0131**
- releaseDate: **2022-07-04**
- generation/system: **6.5号機 / AT / CZ / ゲーム数・セット数上乗せ**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **L 81.6 / 1 96.8 / 2 98.7 / 4 103.0 / 5 105.4 / 6 108.3%**
- CZ: **1/220 / 1/206 / 1/176 / 1/167 / 1/159**（設定1/2/4/5/6）
- AT: **1/393 / 1/374 / 1/331 / 1/309 / 1/289**（設定1/2/4/5/6）
- baseGamesPer50: **約33.9G/50枚（約34G表記あり）**
- netIncrease: **AT約2.5枚/G canonical**
- basicPayout: **初回セット70G以上 / 2セット目以降30G以上 / エクスタシーチャンス最大300G**
- ceiling: **液晶1000G+α→AT / CZ間700G→CZ / CZ最大4スルー後5回目→AT濃厚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_MINOR_UNVERIFIED**
- confidence: **HIGH_CORE / HIGH_RESET / OFFICIAL_MODEL**

### resetBehavior v0.7 — No.1506
- **設定変更**: 有利区間・天井・内部モード/状態RESET。ゲーム数テーブル/CZスルー回数天井を再抽選。高確スタート。
- **据え置き**: 有利区間・天井・内部モード/状態CARRY_OVER。
- **純電源OFF→ON**: 有利区間・天井・内部モード/状態CARRY_OVER。昼ステージ。
- **ゲーム数/天井**: 液晶1000G+αでAT、CZ間700GでCZ、最大4スルー後5回目CZでAT濃厚。
- **リセット時天井差**: 固定G数短縮はNONE_CONFIRMED。規定テーブル/スルー回数は再抽選。
- **モード/状態**: 設定変更で再抽選＋高確スタート。リセット専用の設定別全振り分け/高確率はUNVERIFIED_AFTER_RESEARCH。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。有利区間ランプ非搭載。
- **朝一恩恵**: 高確スタート、1G目レア小役でCZ/AT直撃チャンス。
- **朝一不利**: NONE_CONFIRMED_AFTER_RESEARCH。
- **変更判別**: 前兆後に復帰する液晶G数とデータカウンターの一致/不一致が材料。ランプ/開始ステージ単独では不可。固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: リセット専用で直接固定できた率はなし。A〜E/天国の56.0/21.2/11.6/7.1/3.1/1.0%は設定変更時+AT終了時等のトータル値としてのみ保持。

## 2022-07-04群 — OPEN 4/5
月間監査・別系統資料で確認済みの5機:
1. `パチスロ甲鉄城のカバネリ` — **No.1503 処理済み**
2. `ニューゲッターマウス` — **No.1504 処理済み**
3. `パチスロ犬夜叉` — **No.1505 処理済み**
4. `パチスロ アクエリオン ALL STARS` — **No.1506 処理済み**
5. `スーパーハナハナ2-30` — **次回 No.1507候補**

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_pachislot-tekken-den-tough.md`（パチスロ鉄拳伝タフ）**。
- 今回は本線No.1506の性能コア＋resetBehavior調査を優先し、遡及QAカーソルは変更していない。

## 次回本線の再開地点
- **No.1507候補 `スーパーハナハナ2-30` — 2022-07-04。**
- 処理後、2022-07-04群をPB・別型式・30Φ派生・地域先行・延期/段階導入まで再監査し、CLOSED可否を判定する。

## GitHub保存
- No.1506追加 commit: `9ad81d680e9110a7d749b76f0254b78b7f9f6006`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1506 パチスロ アクエリオン ALL STARS
- https://www.sankyo-fever.jp/collection/931/
- https://web-greenbelt.jp/post-59633/
- https://hazuse.com/machine/pachislot/2S0131/
- https://p.hisshobon.jp/machine/3901/1/88600
- https://p.hisshobon.jp/machine/3901/1/89667
- https://p.hisshobon.jp/machine/3901/1/89608
- https://nana-press.com/kaiseki/machine/383/10362/
- https://nana-press.com/kaiseki/machine/383/10380/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/56/at02-2.php
- https://p-kn.com/slot/3792/
- https://ichikatsu.com/aquarionallstars/
- https://slot-seven.com/aquarlon-tenzyou/
