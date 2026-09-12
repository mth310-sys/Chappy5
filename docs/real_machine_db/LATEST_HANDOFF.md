更新日: 2026-09-13

## 現在地点
- recordCount: **1541**
- latestRecordAdded: **もっと！チバリヨ-30 — No.1541**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-12-19_motto-chibariyo-30.md`
- chronologicalFrontier: **2022-12-19**
- frontierLatestMachine: **もっと！チバリヨ-30 — No.1541**
- schema: **resetBehavior v0.7**
- status: **2022-12-19_GROUP_OPEN_2_OF_4_KNOWN / NEXT_OKIDOKI_GOLD_25PHI**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1540 `パチスロ 真俺の空` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり、最新handoffとmain実レコードを進捗正本として採用。
- main正本はNo.1540まで進行済み、2022-12-19群1/4 OPENだったため、次の未処理 `もっと！チバリヨ-30` をNo.1541として性能コア + resetBehavior v0.7で追加。
- メーカーはネット、正式型式 `SもっとチバリヨNB-30`、検定番号 `1S1924`。GreenBelt検定記事とHAZUSEで型式を照合、検定番号はHAZUSEで確認。
- 実導入は2022-12-19。ぱちんこキュレーション、HAZUSE、なな徹、スロパチクエスト等で一致。
- 設定1〜6の機械割97.9 / 99.4 / 101.3 / 103.2 / 105.3 / 107.6%、ボーナス初当たり約1/255 / 1/252 / 1/237 / 1/224 / 1/211 / 1/202、約33.7G/50枚、純増約3.0枚/Gを複数資料で照合。
- BIG 70G・平均約210枚、REG 30G・平均約90枚。天国80%over / 超天国85%over / パトランプ約92%ループ。
- パチナビの一部表だけ設定5初当たりを1/221とするため `CONFLICT_SOURCE_VALUE`。複数資料一致の約1/211をcanonical採用。
- 天井は通常時最大900G、チェリー最大40回。モードによって500G側等の浅いゲーム数天井あり。同一有利区間内で天国非移行のボーナスが3回続くと3回目ボーナス後に天国移行。
- 設定変更時は有利区間・天井・モードRESET、据え置きはCARRY_OVERをなな徹で確認。
- 有利区間リセット時は53%で天国チャンス以上（天国チャンスA / B / パトランプ準備）。残り47%は通常A/B合算。この数値は設定変更専用全モード振り分けではなく `有利区間リセット時` の公開値として保持。
- 有利区間ランプによるリセット判別は不可。高信頼解析でもリセット判別は調査中。
- 純電源OFF→ON単独時の天井 / モード / 有利区間契約、本機固有ガックン条件 / 発生率は、表記・型式・メーカーと電断 / ガックン語を変え、解析・旧DB・回顧資料まで再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1541 — もっと！チバリヨ-30
- manufacturer: **ネット**
- formalModel: **SもっとチバリヨNB-30**
- inspectionCode: **1S1924**
- releaseDate: **2022-12-19**
- generation/system: **6.4号機 / 30ΦメダルAT / 擬似ボーナス連チャンタイプ**
- payoutRate: **97.9 / 99.4 / 101.3 / 103.2 / 105.3 / 107.6%**
- initialHit: **約1/255 / 1/252 / 1/237 / 1/224 / 1/211 / 1/202**
- baseGamesPer50: **約33.7G/50枚（約34G表記あり）**
- netIncrease: **約3.0枚/G**
- basicPayout: **BIG 70G 約210枚 / REG 30G 約90枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_PURE_POWER_CYCLE_AND_RESET_SPECIFIC_MODE_TABLE**
- confidence: **HIGH core / HIGH setting-change-carryover reset core / HIGH advantageous-section-reset 53% / HIGH inspection / pure-power-cycle & gackun UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — No.1541
- **設定変更**: 有利区間・天井・モードRESET / 再抽選。
- **据え置き**: 有利区間・天井・モードCARRY_OVER。
- **純電源OFF→ON**: 本機固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 最大900G、チェリー最大40回。モードごとの浅い天井あり。
- **スルー天井**: 同一有利区間内で天国非移行ボーナス3回 → 3回目ボーナス後に天国。
- **設定変更専用天井短縮**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **設定変更時モード振り分け**: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **有利区間リセット時モード数値**: 天国チャンス以上53% / 通常A・B合算47%。
- **朝一恩恵**: 設定変更で有利区間RESET。53%の有利区間リセット時優遇値を朝一判断に使用可。ただし設定変更専用値とは定義しない。
- **朝一不利**: 前日天井進行、チェリー天井進行、モード、有利区間内スルー履歴を失う。
- **変更判別**: 高信頼解析で調査中 / 有利区間ランプ不可 / 本機固有ガックン未固定。

## 2022-12-05群 — CLOSED 3/3 canonical actual launch
1. **HEY！エリートサラリーマン鏡（パオン・ディーピー）** — No.1537 済
2. **パチスロ幼女戦記（サミー）** — No.1538 済
3. **パチスロ 這いよれ！ニャル子さん（EXCITE）** — No.1539 済

## 2022-12-19群 — OPEN 2/4 known
1. **パチスロ 真俺の空（スパイキー）** — No.1540 済
2. **もっと！チバリヨ-30（ネット）** — No.1541 済
3. **沖ドキ！GOLD（ユニバーサルブロス / 25Φ）** ← No.1542候補 / 次回最優先
4. **沖ドキ！GOLD-30（ミズホ / 30Φ）**

- 沖ドキ！GOLD 25Φ / 30Φは別型式・別メーカー名義として一覧上独立しているため、性能同一の可能性があっても自動統合せず個別確認する。
- 2機処理後、PB・別型式・30Φ/25Φ派生・地域先行・延期/段階導入まで横断監査して12/19群のCLOSED可否を判定する。

## 今回の主要資料
- NETプレス相当 / DreamNews: https://www.dreamnews.jp/press/0000267155/
- GreenBelt検定記事: https://web-greenbelt.jp/post-64523/
- HAZUSE: https://hazuse.com/machine/pachislot/1S1924/
- ぱちんこキュレーション: https://pachinko-curation.com/34078/
- なな徹総合: https://nana-press.com/kaiseki/machine/473/
- なな徹朝一: https://nana-press.com/kaiseki/machine/473/12916/
- なな徹天井: https://nana-press.com/kaiseki/machine/473/12915/
- なな徹モード: https://nana-press.com/kaiseki/machine/473/12917/
- 一撃モード: https://1geki.jp/slot/s_mtchibariyo/42/
- 一撃ベース: https://1geki.jp/slot/s_mtchibariyo/5/
- パチ＆スロ必勝本: https://p.hisshobon.jp/vpage/2504/2
- パチ＆スロ必勝本モード: https://p.hisshobon.jp/machine/4001/1/92984
- スロパチクエスト: https://www.slopachi-quest.com/article/motto-chibariyo-settei/
- パチナビ: https://pachinavi.net/machines/motto-chibariyo-30/settei/

## 保存コミット
- No.1541追加: `5cd6a5465f1e36058050b4956a00d88bfea92f81`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1542候補 `沖ドキ！GOLD`（ユニバーサルブロス / 25Φ、2022-12-19）から性能コア + resetBehavior v0.7を収集する。その後 `沖ドキ！GOLD-30`（ミズホ / 30Φ）を別型式・別メーカーとして個別確認し、PB・派生・地域先行・延期/段階導入まで再監査して2022-12-19群のCLOSED可否を判定する。**
