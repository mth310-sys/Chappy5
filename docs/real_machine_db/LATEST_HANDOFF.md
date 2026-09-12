更新日: 2026-09-12

## 現在地点
- recordCount: **1478**
- latestRecordAdded: **パチスロドリフターズ — No.1478**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-02-07_pachislot-drifters.md`
- chronologicalFrontier: **2022-02-07**
- frontierLatestMachine: **パチスロドリフターズ — No.1478**
- schema: **resetBehavior v0.7**
- status: **2022-02-07_GROUP_CLOSED_2_OF_2_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1477「BLACK LAGOON ZERO bullet MAX」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定の次機 `パチスロドリフターズ` をNo.1478へ追加。
- 導入日は2022-02-07。サミー、型式 `S パチスロドリフターズ ZS`、検定番号 `1S1187`、6.2号機ATを旧DB・業界/解析資料で確認。
- 性能コアは設定1〜6の機械割97.6/98.9/100.6/104.8/107.9/109.2%、DG+漂流者BONUS初当たり1/299.8〜1/216.3、DRIFTERS RUSH初当たり1/581.5〜1/321.8、ベース約35.6G/50枚を保存。
- リアルボーナス純増約4.9枚/G。AT全体の平均純増を約4.0枚/Gとする資料は対象区間の定義差として分離。DG約114枚、DRIFTERS RUSHは初期10/20/30G+α、ボーナス約1/3.3、平均獲得約690枚を比較用性能として保存。
- 通常最大天井は通常Aの約800G+α。モード別最大天井は通常A約800G、通常B約600G、通常C約250G、天国約150G、SP約350G。
- resetBehavior v0.7は、設定変更時に天井・内部モード・内部状態・有利区間をRESETし、異世界ステージから開始。据え置きは天井・有利区間をCARRY_OVER。據え置きの内部モード/状態は当時解析で調査中のため推測せずUNVERIFIED_AFTER_RESEARCH。
- 純電源OFF→ONは天井・内部状態CARRY_OVERを直接確認。内部モードと有利区間そのものの純電断時機種固有明記は十分な再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
- 設定変更専用の固定短縮天井は確認されず、新規有利区間移行時のモード抽選によって最大天井が変化する構造。
- 公開朝一数値として、有利区間移行時の設定別モード振り分けを保存。設定1は通常A/B/C/天国/SP=48.9/19.6/4.3/24.8/2.3%、設定6は7.1/18.6/27.7/28.3/18.2%。設定変更専用テーブルではないが、設定変更後は有利区間RESET→新規移行のため朝一適用対象として扱う。
- 異世界ステージは20G継続でDG以上、30G継続で義経Battle濃厚。設定変更時は異世界ステージ開始を直接確認。
- 有利区間ランプはクレジット上部の `_`。通常時点灯型で朝一消灯=設定変更濃厚、点灯=据え置き濃厚。ただしDRIFTERS RUSH終了後にも消灯するため、前日消灯閉店・店舗対策を例外として保持。
- 本機固有の設定変更ガックン条件/発生率、設定変更専用固定初当たり率/CZ率は再探索後も固定できずUNVERIFIED_AFTER_RESEARCH / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 数値競合は平均せず保持。DR初当たり設定1は業界/K-Navi等1/581.5に対し、なな徹等1/581.8。DG+漂流者BONUS設定6は複数高信頼資料1/216.3に対し一部二次資料1/214.9。canonicalは複数一致の1/581.5・1/216.3。
- 2022-02-07群は月間新台一覧/複数資料で `BLACK LAGOON ZERO bullet MAX` と `パチスロドリフターズ` の2機を確認し、2/7群をCLOSED。
- 2022年2月の次導入境界は2022-02-21。複数月間一覧で `SLOTマッピー`、`パチスロ 言い訳はさせないわよ by 激壇蜜`、`メルヘンクエスト` の3機を確認。次回はこの群へ進む。
- 遡及resetBehavior QAは本線を優先し、前回カーソルを維持。

## No.1478 — パチスロドリフターズ
- path: `docs/real_machine_db/machines/2022-02-07_pachislot-drifters.md`
- manufacturer: **サミー**
- formalModel: **S パチスロドリフターズ ZS**
- inspectionCode: **1S1187**
- releaseDate: **2022-02-07**
- generation/system: **6.2号機 / AT / リアルボーナス集中型**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.9 / 100.6 / 104.8 / 107.9 / 109.2%**
- initialHit: **DG+漂流者BONUS 1/299.8 / 1/281.6 / 1/267.1 / 1/243.9 / 1/228.9 / 1/216.3**
- rushInitialHit: **DR 1/581.5 / 1/531.0 / 1/481.3 / 1/407.9 / 1/361.0 / 1/321.8**
- baseGamesPer50: **約35.6G**
- netIncrease: **リアルボーナス約4.9枚/G（AT全体平均約4.0枚/G表記は定義差として分離）**
- basicPayout: **DG約114枚 / DR初期10・20・30G+α / DR中ボーナス約1/3.3 / DR平均獲得約690枚**
- normalCeiling: **通常A 最大約800G+α → DG以上**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_MINOR_UNVERIFIED**
- confidence: **HIGH_CORE_HIGH_RESET_POWER_MODE_AND_GAKKUN_UNVERIFIED**

### resetBehavior v0.7 — No.1478
- **設定変更**: 天井・内部モード・内部状態・有利区間RESET。異世界ステージ開始。
- **据え置き**: 天井・有利区間CARRY_OVER。内部モード/状態は当時解析で調査中のためUNVERIFIED_AFTER_RESEARCH。
- **純電源OFF→ON**: 天井・内部状態CARRY_OVER。内部モード・有利区間の純電断固有明記はUNVERIFIED_AFTER_RESEARCH。
- **ゲーム数/天井**: 通常A最大約800G+α。設定変更専用固定短縮はなく、有利区間移行時モード再抽選で約150/250/350/600/800Gの最大天井へ分岐。
- **モード/状態**: 設定変更時RESET。有利区間移行時に通常A/B/C・天国・SPを設定別再抽選。
- **有利区間**: 設定変更時RESET、据え置きCARRY_OVER。通常時ランプ点灯型。
- **朝一恩恵/不利**: 新規モード抽選を受ける。前日天井/モード/状態は消去。異世界20G継続でDG以上、30G継続で義経Battle濃厚。
- **変更判別**: 朝一 `_` ランプ消灯=設定変更濃厚、点灯=据え置き濃厚。DR終了後消灯・前日消灯閉店・店舗対策を例外保持。ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 有利区間移行時モード振り分けを設定1〜6全て保存。設定1=48.9/19.6/4.3/24.8/2.3%、設定6=7.1/18.6/27.7/28.3/18.2%（通常A/B/C/天国/SP）。

## 次回本線の再開地点
- **2022-02-21群へ進み、No.1479候補「SLOTマッピー」から処理。**
- 同日既知候補は `SLOTマッピー`、`パチスロ 言い訳はさせないわよ by 激壇蜜`、`メルヘンクエスト` の3機。
- No.1479以降、3機を順次処理し、PB・30Φ別型式・地域先行・延期/段階導入を含めて2/21群を再監査してCLOSED可否を判定する。
- 性能コアとresetBehavior v0.7を同時収集する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線を優先し新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1478追加 commit: `9cc6296e9b1c91b57c4deed17e0a54103d116c31`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1478 パチスロドリフターズ
- https://news.p-world.co.jp/articles/18968/greenbelt
- https://hazuse.com/machine/pachislot/1S1187/
- https://hazuse.com/machine/pachislot/1S1187/genre/201/
- https://hazuse.com/machine/pachislot/1S1187/genre/207/
- https://p-kn.com/slot/3728/
- https://nana-press.com/kaiseki/machine/293/7880/
- https://nana-press.com/kaiseki/machine/293/7885/
- https://nana-press.com/kaiseki/machine/293/7886/
- https://slot-seven.com/drifters-tenzyou/
- https://slot-seven.com/drifters-settei/
- https://1geki.jp/slot/s_drifters/
- https://1geki.jp/slot/s_drifters/40/
- https://www.p-world.co.jp/machine/database/9555
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/194/at02.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/194/at06-2.php
- https://www.pachibee.jp/machines/lecture/222010000

### 2022-02群境界監査 / 次回候補
- https://29den.com/newslot/
- https://nana-press.com/post/1576830
- https://ichikatsu.com/newslot2022/
- https://news.p-world.co.jp/articles/19606/nippon
