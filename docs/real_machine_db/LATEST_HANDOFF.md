更新日: 2026-09-11

## 現在地点
- recordCount: **1340**
- latestRecordAdded: **パチスロ ケロット4 — No.1340**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-03-02_kelot4.md`
- chronologicalFrontier: **2020-03-02**
- frontierLatestMachine: **パチスロ ケロット4 — No.1340**
- schema: **resetBehavior v0.7**
- status: **2020-03-02_GROUP_OPEN_3_OF_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1339「いろはに愛姫」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 開始時main最新handoffが No.1339 / 2020-03-02群OPEN_2_OF_6であることを確認。
- handoff指定の次の未処理 `パチスロ ケロット4` をNo.1340として追加。
- 2020-03-02群は既知6機のうち3機処理済み。群はOPENのまま。

## No.1340 — パチスロ ケロット4
- path: `docs/real_machine_db/machines/2020-03-02_kelot4.md`
- manufacturer: **セブンリーグ（山佐販売・ブランド）**
- formalModel: **Sケロット4CC**
- certificationNumber: **9S1291**
- releaseDate canonical: **2020-03-02**
- generation/system: **6号機 / ノーマル・Aタイプ / BIG偏向型**
- payoutRate: **設定1〜6 = 96.9 / 98.3 / 100.0 / 102.1 / 104.0 / 108.0%**
- BIG: **1/206.7 / 202.2 / 195.0 / 189.4 / 184.0 / 175.2**
- REG: **1/897.7 / 840.2 / 799.2 / 697.1 / 648.8 / 585.1**
- ボーナス合算: **1/168.0 / 163.0 / 156.7 / 148.9 / 143.4 / 134.8**
- base: **約40G/50枚**
- netIncrease: **N/A（リアルボーナス主体）**
- BIG: **最大230枚**
- REG: **60枚固定**
- BIG比率: **約80%**
- 天井: **非搭載**

### resetBehavior v0.7 — No.1340
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_MINIMUM_WITH_POWER_CYCLE_GAPS**
- settingChangeBehavior: 天井進行はN/A。**設定変更後の初回REG終了時、下パネル点滅が約56%で発生し設定変更濃厚**という当時業界公開値を取得。
- carryOverBehavior: 据え置き専用の天井進行はN/A。天井以外の本機固有内部状態を独立して固定する直接資料は再探索後もUNVERIFIED。
- powerCycleBehavior: 朝一表では設定変更/電源OFF→ONとも天井・モード・ステージが「—」。純電断時の内部状態/演出モード選択状態を直接固定できずUNVERIFIED。
- gameCounterReset / ceilingAfterReset: **N/A（ゲーム数天井非搭載）**。
- modeAfterReset: 朝一専用内部天井モード/ATモードはNONE_CONFIRMED。3つの「ノーマル/スゴロク/虹河ラキ」はプレイヤー選択の演出モードであり、リセット恩恵モードと混同しない。
- stateAfterReset: AT/CZ用の低確・高確等の公開比較対象は確認できず。その他内部フラグは推測補完しない。
- advantageousSectionReset: 押し順AT/ARTを搭載しないノーマル機で、朝一有利区間天井/モード進行は確認されない。本機固有の有利区間ランプ変更判別契約は再探索後も固定できず。
- resetBenefits: 短縮天井なし。設定変更専用初当たり/CZ優遇・朝一専用モード数値は確認できず。
- resetPenalties: 宵越し天井消去N/A。設定変更専用の公開不利要素はNONE_CONFIRMED_AFTER_RESEARCH。
- resetDetection: **初回REG終了時の下パネル点滅 約56% → 設定変更濃厚**。100%ではないため、非点滅を据え置き確定とはしない。ガックン/有利区間ランプ/朝一出目の確定判別は再探索後もUNVERIFIED。
- publicMorningNumbers: **下パネル点滅 約56%**。その他設定変更専用モード振り分け・朝一特定G当選率・専用ボーナス確率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## No.1340 品質注記
- 山佐公式、グリーンべると/P-WORLD検定情報、娯楽産業、PiDEA、HAZUSE、1geki、パチ＆スロ必勝本、SLOT HACK等を横断。
- 型式/検定番号、導入時期、設定別ボーナス確率/機械割、約40G/50枚、BIG最大230枚/REG60枚、天井非搭載を複数系統で照合。
- ボーナス確率は資料により末尾0.1程度の丸め差があるため、別スペックCONFLICTにはせず表示精度差として原資料値を注記。
- 設定変更判別の約56%は当時業界資料で取得。純電断内部状態、据え置き独立契約、ガックン、有利区間ランプ判別、その他朝一数値は検索語・資料系統変更後も固定できずUNVERIFIED/PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## 2020-03-02群監査
- 既知6機: **S地獄少女 あとはあなたが決めることよ / いろはに愛姫 / パチスロ ケロット4 / エヴァンゲリオン フェスティバル / キングオブジャック / パチスロ ハナペカ**。
- S地獄少女 — No.1338 処理済み。
- いろはに愛姫 — No.1339 処理済み。
- パチスロ ケロット4 — No.1340 処理済み。
- エヴァンゲリオン フェスティバル — 未処理。
- キングオブジャック — 未処理。
- パチスロ ハナペカ — 未処理。
- 群判定: **OPEN_3_OF_6_PROCESSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 本リレーでは新規時系列キュー継続を優先。遡及QA再開地点はmain実ファイル順から再計算し、既処理機を再処理しない。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1340を再取得。
2. **2020-03-02群の次の未処理 `エヴァンゲリオン フェスティバル` をNo.1341候補として処理**。
3. 続いて `キングオブジャック → パチスロ ハナペカ` を同じ群キューで処理。
4. 6機完了後、全メーカー/別型式/別スペック/PB/地域差を再監査して2020-03-02群CLOSED可否を判定する。
5. PSO2はNo.1337で2/24 canonical・2/25一部・3/2全国本格の導入日差を保持済みのため重複登録しない。

## 主要出典 — 取得日 2026-09-11
### No.1340 パチスロ ケロット4
- 山佐ネクスト公式: https://yamasa-next.co.jp/model_klt4/
- グリーンべると/P-WORLD検定情報: https://news.p-world.co.jp/articles/12547/greenbelt
- 娯楽産業: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B1%E3%83%AD%E3%83%83%E3%83%884%E3%80%8D/
- PiDEA 新機種記事: https://www.pidea.jp/articles/%E8%99%B9%E6%B2%B3%E3%83%A9%E3%82%AD%E3%82%82%E5%A4%A7%E6%B4%BB%E8%BA%8D%E3%81%99%E3%82%8B%E3%82%B1%E3%83%AD%E3%83%83%E3%83%88%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E6%9C%80%E6%96%B0%E4%BD%9C%E7%99%BB%E5%A0%B4%EF%BC%8F%E5%B1%B1%E4%BD%90
- PiDEA 詳細/下パネル約56%: https://www.pidea.jp/articles/s%E6%96%B0%E5%8F%B0%E3%81%AE%E3%81%94%E7%B4%B9%E4%BB%8B-s%E3%82%B1%E3%83%AD%E3%83%83%E3%83%884-%E5%B1%B1%E4%BD%90
- HAZUSE: https://hazuse.com/machine/pachislot/9S1291/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/9S1291/genre/201/
- 1geki: https://1geki.jp/slot/s_kelot4/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_kelot4/3/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/3474/1/77066
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/3474/1/76645
- SLOT HACK: https://slothack.net/matome/4499/
