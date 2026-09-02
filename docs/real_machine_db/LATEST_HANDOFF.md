# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは367件地点 `スーパーアロハ`。
- 直前handoff指定の時系列漏れ候補 `スターマンアイズ` をmain全ツリーで確認し、未登録を確定。
- **今回、時系列遡及漏れとして368「スターマンアイズ」（SANKO）を追加。既存368件の再追加禁止。**
- 遡及resetBehavior QAは `竹中直人のパチスロ太閤記` の直後を実ファイル順に走査し、最初の未補完機 `ホークIII-30` をv0.7化。

## 368. スターマンアイズ

record:
- `docs/real_machine_db/machines/2009-03_starman-eyes.md`

要点:
- manufacturer: SANKO（SANKO製造、Adii総発売元の新規参入第1弾）
- formalModelName: **スターマンWA**
- inspectionNumber: **8S1161**
- releaseDate: **CONFLICT: 2009-03 / 2009-05**
  - 2009-02-19付グリーンべると: 3月下旬納品予定
  - pacnk: 2009年3月導入
  - P-WORLD: 導入開始2009年05月
  - 予定納品と実導入の差である可能性はあるが、推測で統合しない。
- generation: 5号機
- systemType: **ノーマル / 純Aタイプ / RT非搭載**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- BIG: **1/309.1 / 1/292.5 / 1/277.6 / 1/264.2 / 1/252.0 / 1/240.9**
- REG: **1/409.6 / 1/399.6 / 1/390.0 / 1/381.0 / 1/372.3 / 1/364.0**
- 合算: **1/176.16 / 1/168.88 / 1/162.16 / 1/156.01 / 1/150.27 / 1/144.96**
- 機械割: **96.1 / 98.6 / 101.1 / 103.5 / 106.2 / 110.0%**。P-WORLDとpacnk一致。
- BIG約312枚、REG約104枚。当時グリーンべると/P-WORLDで一致。
- チェリー成立時約25%、スイカ成立時約80%でボーナス期待。
- MAX BET長押しで「演出モード」と「告知モード」を選択。これはプレイヤー選択の演出方式でありreset用内部モードとは扱わない。
- 50枚ベースは検索語/資料系統を変えて再探索したが本機固有数値を確定できず `UNVERIFIED_AFTER_RESEARCH`。P-WORLDの「コイン持ち良し」から逆算しない。
- `coreStatus=PARTIAL_BASE_UNVERIFIED_WITH_RELEASE_MONTH_CONFLICT`。

### v0.7 resetBehavior — スターマンアイズ

- settingChangeBehavior: `NO_SPECIAL_BEHAVIOR_CONFIRMED_AFTER_RESEARCH`。
- carryOverBehavior: `NOT_APPLICABLE_FOR_GAME_COUNT_MODE_CEILING`。通常ゲーム数天井・ゲーム数管理・RT/ART状態なし。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。リール初期位置/ランプ/初期出目等の本機固有電断復帰は直接資料なし。
- gameCounterReset / ceilingAfterReset: 天井・ゲーム数管理なしのため `NOT_APPLICABLE`。
- modeAfterReset / stateAfterReset: 本DB物差し範囲で該当内部モード/状態なし。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目等の本機固有根拠を確認できず `UNVERIFIED_AFTER_RESEARCH`。
- `resetBehaviorQA=COMPLETE_FOR_YARDSTICK_SCOPE_WITH_POWER_CYCLE_AND_DETECTION_UNVERIFIED`。

主要出典（取得日 2026-09-02）:
- グリーンべると / AdiiとSANKOが新規参入第1弾パチスロを発表 — INDUSTRY
  - https://web-greenbelt.jp/00006522/
- P-WORLD / スターマンアイズ — ANALYSIS_HIGH_DATABASE
  - https://www.p-world.co.jp/machine/database/5487
- pacnk / スターマンアイズ 設定判別ツール — RETROSPECTIVE_ANALYSIS
  - https://pacnk.com/slot/tools/sh_starmaneyes.html

commit:
- 368 スターマンアイズ: `76d44e1c2bd457394f5a8c15dce44375c4a271e7`

## resetBehavior遡及QA進捗

### ホークIII-30（2006-10-15）補完済み

record:
- `docs/real_machine_db/machines/2006-10-15_hawk-iii-30.md`

QA要点:
- 既存性能 `coreStatus: PARTIAL` は崩さず維持。
- 通常30φ天井: **BB後998G / RB(Baby)後457G**で次回ボーナスまで無限RT。
- **設定変更後は無限RTが即発動し、次回ボーナスまで継続**。2006年当時グリーンべるとが設定変更後無限RTを直接明記し、Playgraph転載、旧解析、後年回顧でも整合。
- 朝一設定変更は通常の998G/457G天井待ちをせず0Gから無限RTとなるため、明確な朝一恩恵として保存。
- 据え置き時の前日ゲーム数/RT状態引継ぎ、単純電源OFF→ON時の処理は本機固有直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックン/初期出目等の設定変更判別も `UNVERIFIED_AFTER_RESEARCH`。RT滞在自体はリプレイ頻度から実戦上推測可能との旧解析あり。
- 有利区間は `NOT_APPLICABLE`。
- `resetBehaviorQA=PARTIAL_WITH_SETTING_CHANGE_INFINITE_RT_CONFIRMED_CARRYOVER_AND_POWER_CYCLE_UNVERIFIED`。

主要出典（reset QA取得日 2026-09-02）:
- グリーンべると / 5号機初！“天井あり”の『ホークIII』 — INDUSTRY
  - https://web-greenbelt.jp/00004847/
- P_Style777 / ホークIII — ANALYSIS_SINGLE
  - https://ps777.net/data/hawk3.htm
- Pマンズ / 2006（Playgraph転載） — OLD_INDUSTRY
  - https://p-mans.blogspot.com/2006/
- 廃屋廃人物語 / 設定変更あれこれ — RETROSPECTIVE_SINGLE
  - https://ameblo.jp/enokana1827/entry-11743026560.html

commit:
- ホークIII-30 v0.7 reset QA: `208c0629e2827c3d7c2f342dc6a14e76f72a7b8d`

### 遡及QA次地点

- **次は同日 `ホークIII（25φ）` (`docs/real_machine_db/machines/2006-10-15_hawk-iii.md`)**。
- ホークIII-30と25φはRT契機/天井仕様が異なるため、30φのreset数値を横流しせず25φ固有資料でQAする。
- その後、2006-10の既存実ファイルを時系列で走査し、既にv0.7化済みは飛ばす。

## 2009年5月本線監査

- 2009-05-11 `スーパーアロハ` まで本線収録済み。
- 今回は先に時系列漏れ `スターマンアイズ` を遡及追加したため、次回は2009-05-11以降へ戻る。
- **最優先候補: `スロットニュートラッド`（岡崎産業）**。
  - 岡崎産業公式過去機種一覧で2009年機として存在確認。
  - K-Navi 2009-03-24: ホール導入5月中旬予定。
  - 岡崎産業プレスリリース 2009-05-15: 発売記念イベント開催。
  - P-WORLD: 導入開始2009年05月、型式名スロットニュートラッド、検定8S1107。
  - P-WORLD/K-NaviでBIG/BG/合算/機械割を回収済みだが、機械割に微差（P-WORLD 97.5〜110.1%、K-Navi 97.20〜109.89%）があるため次回CONFLICT扱いで精査。
  - パチマガ旧解析から50枚ベース **37.97 / 38.13 / 38.33 / 38.34 / 38.59 / 38.98G**を回収済み。
  - BIG後50G RTはP-WORLD/パチマガで確認。resetBehaviorの設定変更/電断/据え置き時RT処理は次回専用ページ・旧資料をさらに掘る。
- 続いて `レキオ2-30 / デュエルドラゴンキングダム / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` 等を具体導入日順に監査する。

## 次回再開地点

1. **LATEST_HANDOFF基準368件地点。既存368件の再追加禁止。**
2. 本線は `スロットニュートラッド` を最優先。2009年5月中旬の具体導入日を再探索し、確定できなければ月/中旬精度のまま推測せず登録する。
3. `スロットニュートラッド` は設定別性能、50枚ベース、BIG後50G RTまで取得済み。機械割の資料差をCONFLICTとして整理し、v0.7 resetBehaviorを資料系統を変えて再探索する。
4. 以後 `レキオ2-30 / デュエルドラゴンキングダム / 琉球浪漫25 / 琉球浪漫30 / 緑ドン` を具体導入日順に処理。
5. 遡及resetBehavior QAは **ホークIII（25φ）** から再開する。
6. 毎回GitHub最新mainでREADME/ミッション/INDEX/handoff/既存実ファイルを再取得し、未処理のみ追加する。

## 直近コミット

- 367 スーパーアロハ: `f870d6194608b1b9c7f0678ec9b4ce9c62f10c19`
- 368 スターマンアイズ: `76d44e1c2bd457394f5a8c15dce44375c4a271e7`
- ホークIII-30 reset QA: `208c0629e2827c3d7c2f342dc6a14e76f72a7b8d`
