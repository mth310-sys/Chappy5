更新日: 2026-09-11

## 現在地点
- recordCount: **1281**
- latestRecordAdded: **パチスロ黄門ちゃまV 女神盛-MEGAMORI-**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-04-22_komonchama-v-megamori.md`
- chronologicalFrontier: **2019-04-22**
- frontierLatestMachine: **パチスロ黄門ちゃまV 女神盛-MEGAMORI- — No.1281**
- schema: **resetBehavior v0.7**
- status: **2019-04-22_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1280を再取得して開始。
- INDEXは旧スナップショットのため、README規則どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 直前handoff指定の2019-04-22群残り `パチスロ黄門ちゃまV 女神盛-MEGAMORI-` をNo.1281として性能コア + resetBehavior v0.7で登録。
- K-Navi / HAZUSE / 当時導入予定表 / 2019年新台一覧を横断し、2019-04-22群は SLOTギャラガ / プレミアムハナハナ-30 / 黄門ちゃまV女神盛 の3機で一致したためCLOSED。
- 4/23〜5/6境界を検索し、次の確定導入群は2019-05-07。複数資料で `ジャングルマスターコングダム` と `パチスロ ボンバーパワフルIII` の2機を確認。次回は群全体監査を行いながらこの順で処理する。
- 遡及QA `2007-02_pikaslo.md` は本機名/PIKASLO/ヤーマに設定変更・リセット・朝一・据え置き・電源OFF ON・ガックンを組み合わせ、当時解析/古DB系まで検索を拡張したが、本機固有の内部状態契約を追加固定できず。一般論から補完しない。

## No.1281 — パチスロ黄門ちゃまV 女神盛-MEGAMORI-
- manufacturer: **オリンピア** / brand: **平和**
- formalModel: **`Sパチスロ黄門ちゃまV女神VER／LA6`**
- certificationNumber: **`8S1228`**
- generation/system: **6号機 / AT / 純増約3.5枚/G / 4段階設定**
- releaseDate: **2019-04-22**
- settings: **1 / 2 / 5 / 6**
- 機械割: **98.0 / 99.1 / 105.9 / 110.2%**
- AT初当り: **1/424.7 / 1/424.7 / 1/340.6 / 1/304.3**
- baseGamesPer50: **約51〜53G**
- AT: **純増約3.5枚/G / 初期20G以上**
- ceiling: **333 / 555 / 777 / 999G振り分け、最大999G**

### resetBehavior v0.7
- settingChange: AT天井G数リセット。310WカウンターEXは見た目0・規定ポイント再抽選。310TVは見た目春・内部再抽選。初期ステージは桜蘭の都または緑陰の竹林。有利区間ランプ非点灯。
- carryOver: 据え置き単独条件だけを純電断から完全分離した本機固有資料は未固定。純電断の引継ぎ契約から一般化せず `PARTIAL_CONFIRMED_BY_POWER_CYCLE_BEHAVIOR`。
- powerCycle: 天井G数引継ぎ。310Wは見た目0へ戻るが内部値引継ぎ、310TVは見た目春へ戻るが内部状態引継ぎ。有利区間ランプも引継ぎ。CZ/AT中は状態・ステージ引継ぎ。
- gameCounterReset: 設定変更でRESET / 純電断でCARRY OVER。
- ceilingAfterReset: 設定変更後も333/555/777/999G通常振り分けを再抽選。固定のリセット専用短縮天井ではない。
- mode/stateAfterReset: 310TV内部状態・310W規定ポイントを再抽選。有利区間移行時に初回喝ゾーンG数を抽選。
- advantageousSectionReset: 設定変更時は有利区間ランプ非点灯。純電断はランプ状態引継ぎ。
- resetBenefits: 設定別に浅い天井選択率差はあるが通常の設定差であり、リセット専用恩恵には数えない。専用固定短縮/初当り優遇は `NONE_CONFIRMED_AS_RESET_ONLY_BENEFIT`。
- resetDetection: 朝一ランプ点灯は設定変更でない方向の強い材料。消灯単独は変更確定にしない。310W/310TVは設定変更と純電断の双方で見た目初期化されるため単独判別不可。ガックン本機固有確定率なし。
- numericResetData: 天井振り分けは設定1・2=`3.1/12.1/1.6/83.2%`、設定5=`20.3/30.1/1.6/48.0%`、設定6=`28.1/30.1/1.6/40.2%`（333/555/777/999G順）。有利区間移行時初回喝ゾーンG数の公開設定別振り分けもレコード内へ保存。

## qualityNotes / conflicts
- canonical導入日はK-Navi / HAZUSE / 複数導入一覧が **2019-04-22** で一致。グリーンべるとの4/21は納品予定なので矛盾しない。
- 一部解析の `2019-04-20` は別表記として保持し、平均せずcanonical 4/22。
- 一撃の旧表では純電断天井Gが「調査中」だが、後更新・詳細表のHAZUSEが引継ぎを明記。古い未確定表記を数値競合とは扱わない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-02_playboy-30.md`**
- checkedThisRun: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- result: 追加検索でもピカスロ固有の設定変更/据え置き/純電断別内部契約を固定できず。既存性能値は再調査せず、一般論から埋めない方針を維持。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2007-02_pikaslo.md`**
- NOTE: ピカスロ自体のファイル更新は今回未実施。次回、プロジェクト既存の `PARTIAL_RESEARCH_EXHAUSTED` 表記規則へ合わせて検索枯渇結果をファイルへ確定後、次レコードへ進める。

## 2019-04-22群 — CLOSED
### 登録済み
- No.1279 SLOTギャラガ
- No.1280 プレミアムハナハナ-30
- No.1281 パチスロ黄門ちゃまV 女神盛-MEGAMORI-

### 群監査結果
- K-Navi 2019年4月カレンダー、当時導入予定表、2019年新台一覧で3機が一致。
- 全メーカー/別型式/別スペック/PB/地域差を横断した範囲で独立した追加4/22機を固定できず、CLOSED判定。

## 次の時系列境界
- 2019-04-23〜2019-05-06: 独立した追加パチスロ導入機を固定できず。
- 2019-05-07群: 少なくとも2機を複数資料で確認。
  1. **ジャングルマスターコングダム** — 山佐 — 5.9号機A+RT
  2. **パチスロ ボンバーパワフルIII** — SANKYO — 6号機AT
- 5/7群は未CLOSE。次回はK-Navi月間カレンダー/当時導入一覧/メーカー系資料で同日漏れを再監査する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1281を再取得。
2. 2019-05-07群を再監査し、**ジャングルマスターコングダムをNo.1282候補**として性能コア + resetBehavior v0.7で処理。
3. 続いて **パチスロ ボンバーパワフルIII** を処理し、5/7群の全メーカー/別型式/別スペック/PB/地域差を監査後CLOSED判定。
4. 遡及QAは **`2007-02_pikaslo.md`** の検索枯渇結果を正式保存してから次レコードへ進める。

## 主要出典 — 取得日 2026-09-11
### 黄門ちゃまV 女神盛-MEGAMORI-
- グリーンべると: https://web-greenbelt.jp/00011098/
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/8S1228/
- HAZUSE 天井/設定変更: https://hazuse.com/machine/pachislot/8S1228/genre/207/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_megamori/3/
- パチマガスロマガ 初当り/機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/142/h.php
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/142/c-1.php
- パチマガスロマガ AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/142/05-1.php
- パチマガスロマガ 喝ゾーン: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/142/10-2.php
- K-Navi 2019年4月: https://p-kn.com/calendar/201904/
- パチスロ立ち回り講座: https://crankyseven.com/newmachine-info.htm

### 次境界 2019-05-07
- K-Navi ボンバーパワフルIII: https://p-kn.com/slot/3230/
- ちょんぼりすた ボンバーパワフルIII: https://chonborista.com/slot/sankyo-slot/80592/
- ちょんぼりすた ジャングルマスターコングダム: https://chonborista.com/slot/yamasa-slot/79630/
- モゲスロ 2019導入カレンダー: https://moge-site.com/new-slot2019
