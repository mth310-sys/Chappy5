更新日: 2026-09-10

## 現在地点
- recordCount: **1170**
- latestRecordAdded: **パチスロ戦場のヴァルキュリア**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-02-05_senjou-no-valkyria.md`
- chronologicalFrontier: **2018-02-05**
- frontierLatestMachine: **パチスロ戦場のヴァルキュリア — No.1170**
- schema: **resetBehavior v0.7**
- status: **2018-02-05_GROUP_OPEN_1_OF_3_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1169 `ニューラッキージャックポット 7ver.` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1169件 / chronologicalFrontier 2018-01-22 / 1/22群CLOSED**。
- 2018-01-23〜02-04境界を再監査し、今回確認した全国導入カレンダーでは1/22の次のパチスロ本線群は2/5。地域差/別スペックは今後も漏れ監査を継続する。
- K-Navi 2018年2月導入カレンダーで2/5パチスロ群を `パチスロ戦場のヴァルキュリア / 乙女マスターズ～空を翔る白き軌跡～ / 新世紀エヴァンゲリオン～まごころを、君に～2` の3機として直接確認。
- 最古未処理のNo.1170 `パチスロ戦場のヴァルキュリア` をperformance core + resetBehavior v0.7で追加。

## No.1170 — パチスロ戦場のヴァルキュリア
- path: `docs/real_machine_db/machines/2018-02-05_senjou-no-valkyria.md`
- manufacturer: タイヨーエレック（サミーブランド展開）
- releaseDate: 2018-02-05
- generation/system: 5.9号機 / A+ART / 有利区間搭載
- formalModelName: `パチスロ戦場のヴァルキュリア／RS`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- 機械割: **97.5 / 98.8 / 100.3 / 104.0 / 107.0 / 112.1%**
- ボーナス合算: **1/119.8 → 1/88.4**
- ART初当たりcanonical: **1/576.8 → 1/496.9**
- ART初当たり設定6 secondary conflict: **1/486.9**（ちょんぼりすた）
- 50枚ベース: **約32.0G**
- ART純増: **単体約1.0枚/G / ボーナス込み約1.5枚/G**
- 基本獲得: BIG252枚 / MISSION BONUS70枚 / REG42枚
- ART初回: 進撃RUSHから開始、平均上乗せ約100G
- EX-ART最終決戦: 1セット20G、最大98%ループ
- 天井: **なし**

### resetBehavior v0.7
- 一撃の本機専用比較表で、**設定変更時は内部状態クリア→非有利区間、RT状態クリア→非RT**を直接確認。
- 設定変更時の液晶はブルール / ランドグリーズ / バリアスから抽選。
- **純電源OFF→ONは内部状態・RT状態を引継ぎ**。液晶は3通常ステージ滞在時のみその3ステージから再抽選、その他ステージは引継ぎ。
- 天井非搭載のためゲーム数天井/短縮天井はN/A。
- 設定据え置きを純電断と独立条件で明記した直接契約は再探索後も`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 有利区間中はWIN枚数表示7セグ右下ドット点灯という公開仕様があるが、朝一点灯/消灯のみで設定変更確定とはしない。
- ガックン発生条件/確率、設定変更専用モード振り分け/初当たり優遇率などは検索語・資料系統変更後も固定できず`UNVERIFIED` / `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `CONFLICT_ART_INITIAL_HIT_SETTING6`: 一撃 / パチマガスロマガ / 期待値見える化は1/496.9系で一致。ちょんぼりすたのみ1/486.9。平均せず496.9をcanonical、486.9をsecondaryとして保持。
- メーカー表記は、P-WORLDと業界記事が製造元タイヨーエレック、解析サイトがSammyブランド表記。本DBでは製造元とブランドを分離。

## 2018-02-05群監査
K-Navi全国導入カレンダーで以下3機を確認。
1. `パチスロ戦場のヴァルキュリア` — **No.1170 完了**
2. `乙女マスターズ～空を翔る白き軌跡～` — **未処理 / 次候補**
3. `新世紀エヴァンゲリオン～まごころを、君に～2` — **未処理**

- `乙女マスターズ～空を翔る白き軌跡～` はK-Navi / ちょんぼりすた等で2018-02-05導入を確認済み。A+RT、天井非搭載の候補として次回performance core + resetBehaviorを収集する。
- `新世紀エヴァンゲリオン～まごころを、君に～2` も2018-02-05導入確認済み。
- 2/5群はまだCLOSEしない。上記残り2機を処理し、メーカー別/別スペック横断監査後にCLOSED判定する。

## 継続注意事項
- **鬼若弁慶**は2018-02-19で正式回収する。古い予定表記へ戻さない。
- `イミソーレXX` exact dayは新しい決定的資料が出た場合のみ追補。月単位No.1159として既回収。
- ノーマル/A+RT機のRT内部状態や成立済みボーナスの設定変更/純電断挙動を一般論から埋めない。
- 5.9号機の有利区間も一般論で機種固有挙動を補完しない。本機のように直接比較表がある場合のみ確定する。
- ART初当たり等の資料差は平均化せずCONFLICT保持。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1170を再取得。
2. **1170件 / chronologicalFrontier 2018-02-05 / 2/5群OPEN** を正本として継続。
3. 最優先は **No.1171候補 `乙女マスターズ～空を翔る白き軌跡～`**。
4. その後 `新世紀エヴァンゲリオン～まごころを、君に～2` を処理。
5. 2/5群のメーカー別一覧・別スペック・地域差を再監査し、漏れがなければCLOSED。
6. その後2/12境界を確認し、2/19群へ時系列前進。`鬼若弁慶` は2/19で正式回収。
7. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1170 戦場のヴァルキュリア
- グリーンべると: https://web-greenbelt.jp/00010122/
- P-WORLD: https://www.p-world.co.jp/machine/database/8575
- 一撃 天井/設定変更: https://1geki.jp/slot/s_valkyria/3/
- 一撃 ボーナス/ART確率: https://1geki.jp/slot/s_valkyria/1/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/165/h-1.php
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/52535/
- K-Navi 機種: https://p-kn.com/slot/2939/
- K-Navi 2018年2月カレンダー: https://p-kn.com/calendar/201802/
- すろぱちくえすと: https://www.slopachi-quest.com/article/valkyria-chronicles/
- 期待値見える化: https://slotjin.com/slot-tool/valkyria/
- atwiki 777town skill wiki: https://w.atwiki.jp/samita_skill/pages/197.html
