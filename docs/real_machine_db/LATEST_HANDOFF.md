# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 開始時点の最新mainは371件地点 `琉球浪漫30`。会話上の367件地点へ戻らずmainを優先した。
- 2009-05-12〜24をK-Navi全国導入カレンダー等で境界監査し、安全な具体日付き未処理を確認できなかったため2009-05-25群へ進行。
- **今回 372「緑ドン」（エレコ）を追加。既存372件の再追加禁止。**
- 2009-05-25同日群を再確認したところ、直前HANDOFFに列挙されていなかった **`がんばれゴエモン`** もK-Naviカレンダーに掲載され、GitHub既存検索・推定パス確認では未登録。次回は同日群の最古未処理候補としてこれを先に処理する。
- `デュエルドラゴンキングダム` も推定パス未存在で未処理候補。`レキオ2-30` は370として既収録済みのため重複追加禁止。
- 遡及resetBehavior QAの次地点は引き続き `ホークIII（25φ）`。新規収集本線を止めない。

## 372. 緑ドン

record:
- `docs/real_machine_db/machines/2009-05-25_midori-don.md`

要点:
- manufacturer: エレコ
- formalModelName: **緑ドン9**
- inspectionNumber: **9S0050**
- releaseDate: **2009-05-25**。K-Navi全国導入カレンダー/機種ページを具体日主値とし、ユニバーサル公式2009年5月発売、グリーンべると当時記事「5月下旬より導入開始予定」、2009-06-09業界記事の「5月下旬に導入済み」で照合。HAZUSEの2009-10-28表示は当時系列と大きく矛盾するため導入日根拠に不採用。
- generation: 5号機
- systemType: **ボーナス+ART / A+ART / 256G周期CZ**
- settings: 1 / 2 / 3 / 4 / 5 / 6
- BIG合算: **1/431.16 / 1/420.10 / 1/399.61 / 1/385.51 / 1/372.36 / 1/337.81**
- REG: **1/873.81 / 1/851.12 / 1/809.09 / 1/744.73 / 1/697.19 / 1/606.81**
- ボーナス合算: **1/288.70 / 1/281.27 / 1/267.49 / 1/254.02 / 1/242.73 / 1/217.01**
- 50枚ベース: **35.61 / 35.63 / 35.66 / 35.69 / 36.07 / 36.69G**（パチマガ旧解析1000円あたりゲーム数）。
- ART「万里遊戯」: **1セット50G、純増約+1.3枚/G、最大95%継続**。
- 設定別ART初当り実数は、K-Naviに設定推測項目の存在までは確認したが本文数値を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- 機械割は平均せず `CONFLICT`:
  - 市場掲載系列: **96.4 / 99.0 / 101.7 / 106.8 / 112.0 / 119.1%**
  - パチマガ暫定シミュレート: **96.09 / 98.83 / 101.51 / 105.24 / 110.75 / 119.72%**
- 獲得枚数も資料競合を平均しない。A-SLOT/攻略資料はBIG約259枚（技術介入MAX264枚）・REG約60枚、5号機クロニクルはBIG約252枚・REG約80枚。

### 天井・周期CZ

- 通常時 **256Gごと**に周期CZ「ドンちゃんチャレンジ」へ。
- ボーナス間で周期CZに5回到達すると **5回目が天井CZ** となりナビ発生。単純な固定1280G直撃天井ではなく、CZ/ART消化G数等で実到達G数は変動するため構造を分けて保存。
- 当時攻略資料では、天井までの周期CZ回数は **ボーナスでクリア**。途中の自力ARTではクリアされない。

### v0.7 resetBehavior — 緑ドン

- settingChangeBehavior: `RESET_CEILING_CZ_COUNT_CONFIRMED_SINGLE_CONTEMPORARY_ANALYSIS`。当時天井攻略資料で設定変更により天井までの周期CZ回数がクリアされる旨を確認。K-Naviにも「設定変更後の挙動」解析項目の存在を確認したが現存本文は回収不能。通常時低確/高確の変更時振り分けは `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: `PRACTICAL_OVERNIGHT_CARRYOVER_UNRELIABLE_DUE_POWER_OFF_TIMER_RESET`。設定据え置きでも、当時資料では電源OFFから約2時間経過で設定変更と同じ天井周期回数クリア処理が行われるとされる。通常の閉店→朝一の宵越し天井価値は失われやすい。電源を落とさない純粋な据え置き時の周期回数処理は `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `RESET_CEILING_CZ_COUNT_AFTER_APPROX_2_HOURS_OFF_ANALYSIS_SINGLE_CONTEMPORARY`。2009-05-30/06-01時点の当時攻略資料2系統で「電源OFF約2時間後、天井周期回数がクリア/設定変更と同じ処理」を照合。ただしメーカー一次資料は未回収なので信頼度を抑制。
- gameCounterReset: `RESET_CEILING_CZ_COUNT_ON_SETTING_CHANGE_AND_AFTER_APPROX_2H_POWER_OFF`。管理単位は単純総G数ではなくボーナス間の256G周期CZ到達回数。
- ceilingAfterReset: `NO_SHORTENING_CONFIRMED`。クリア後は通常の5回目周期CZ天井条件へ戻り、設定変更専用短縮天井は確認なし。
- modeAfterReset / stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`。ART継続モードや通常低確/高確の設定変更時具体振り分けを直接確定できず。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: `CEILING_PROGRESS_LOST`。設定変更または当時資料上の約2時間電源OFFで天井周期進捗が消える。
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/設定変更判別/据え置きを機種名・型式・メーカーと組み替え再探索したが本機固有の確定手段を確認できず。天井周期進捗消失は電源OFFタイマーでも起こるため設定変更判別に流用不可。
- numericResetData:
  - normalCycleGames: **256G**
  - normalCeilingCycle: **5回目の周期CZ**
  - nominalNormalCeilingReference: **約1280G + CZ/ART等の消化分**
  - ceilingProgressAfterSettingChange: **0周期相当へクリア**
  - powerOffTimerForCeilingClear: **約2時間（当時二次資料、メーカー一次未回収）**
  - resetSpecificCeiling: `NONE_CONFIRMED`
  - resetModeDistribution / resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
  - morningHitRate / resetBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetBehaviorQA=PARTIAL_WITH_CORE_CEILING_RESET_AND_POWER_OFF_BEHAVIOR_RECOVERED`。

主要出典（取得日 2026-09-02）:
- ユニバーサルエンターテインメント / 緑ドン 花火の起源探求之巻 — OFFICIAL
  - https://www.universal-777.com/product/slot/midoridon/
- グリーンべると / 新筐体を身にまといメモリアル『緑ドン』登場 — CONTEMPORARY_INDUSTRY
  - https://web-greenbelt.jp/00003074/
- グリーンべると / 『緑ドン』に新パネル「ビリーver」登場 — CONTEMPORARY_INDUSTRY
  - https://news.p-world.co.jp/articles/3482/greenbelt
- K-Navi / 2009年5月新台導入カレンダー — ANALYSIS_HIGH_CALENDAR
  - https://p-kn.com/calendar/200905/
- K-Navi / 緑ドン — ANALYSIS_HIGH
  - https://p-kn.com/slot/970/
- K-Navi / 緑ドン ボーナス確率 — ANALYSIS_HIGH
  - https://p-kn.com/slot/970/10313/
- パチマガスロマガ / ボーナス確率・PAYOUT — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/78/h.php
- パチマガスロマガ / 小役確率・1000円あたりゲーム数 — OLD_ANALYSIS
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/78/c.php
- 5号機クロニクル / ユニバーサル系5号機全機種一覧 — SECONDARY_DATABASE
  - https://5goki.com/universal
- pacnk / 緑ドン 設定判別ツール — SECONDARY_ANALYSIS
  - https://pacnk.com/slot/tools/sh_midoridon.html
- HAZUSE / 緑ドン — ANALYSIS_WITH_DATE_CONFLICT
  - https://hazuse.com/machine/pachislot/9S0050/
- A-SLOT / エレコ 緑ドン 中古実機 — RETROSPECTIVE_MACHINE_DATABASE
  - https://www.a-slot.com/SHOP/eleco25.html
- 2009-05-27当時攻略ブログ / 緑ドンの天井について — CONTEMPORARY_ANALYSIS_SINGLE
  - https://mezase20.com/blog-entry-133.html
- 2009-06-01当時攻略ブログ / 緑ドン天井狙いしてきました！ — CONTEMPORARY_ANALYSIS_SINGLE
  - https://mezase20.com/blog-entry-135.html
- 2009-05-30当時攻略ブログアーカイブ / 緑ドン天井狙い — CONTEMPORARY_ANALYSIS_SINGLE_CORROBORATION
  - https://plaza.rakuten.co.jp/jemss/diaryall/

commit:
- 372 緑ドン: `0bb35d10fe275b92a1459b7e883438ccd183a13e`

## resetBehavior遡及QA進捗

- `ホークIII-30`（2006-10-15）はv0.7補完済み。
- **次は `ホークIII（25φ）` (`docs/real_machine_db/machines/2006-10-15_hawk-iii.md`)**。30φ版の数値を横流しせず25φ固有資料でQAする。
- 既にv0.7化済み機は飛ばし、新規本線を止めない。

## 2009年5月〜6月境界監査

- 2009-05-10 `琉球浪漫30` は371として収録済み。
- 2009-05-12〜24はK-Navi全国導入カレンダー上、パチスロの新規導入日を確認できず、本線を2009-05-25へ進めた。
- 2009-05-25 `緑ドン` は今回372として追加済み。
- 同日K-Navi全国導入カレンダーには **`がんばれゴエモン / 緑ドン / デュエルドラゴンキングダム / レキオ2-30`** を掲載。
- `がんばれゴエモン` はGitHubコード検索で既存ヒットなし、推定パス `2009-05-25_ganbare-goemon.md` も未存在。グリーンべると2009-03-18当時記事は納品を **5月24日予定**、KONAMI公式は2009年5月稼働開始、K-Navi全国導入カレンダーは5月25日。パチビーは5月26日とするため、次回は日付を `CONFLICT/納品予定 vs 全国導入` として整理し、未登録なら373として処理する。
- `デュエルドラゴンキングダム` も推定パス `2009-05-25_duel-dragon-kingdom.md` は未存在。がんばれゴエモン後に既存有無を再確認して処理。
- `レキオ2-30` は370として既収録。山佐公式2009-05と当時具体日2009-06-01競合を保持し重複追加禁止。
- **`琉球浪漫25` はグリーンべると当時記事で2009-05-31納品開始を直接確認済み。** P-WORLDは30Φ版と内部仕様同一とするが独立機種として別レコード化する。
- `天誅` の日付競合は直接根拠なしに解消しない。

## 次回再開地点

1. **LATEST_HANDOFF基準372件地点。既存372件の再追加禁止。**
2. 2009-05-25同日群を再監査し、最優先は **`がんばれゴエモン`（KPE）**。GitHub既存有無を再確認後、未登録なら性能コア+v0.7 resetBehaviorを収集して373として追加する。導入日はグリーンべると5/24納品予定、K-Navi 5/25全国導入、パチビー5/26導入の差を平均せず保持する。
3. 次に **`デュエルドラゴンキングダム`** を処理。
4. その後 **2009-05-31 `琉球浪漫25`** を独立レコードとして処理する。
5. `レキオ2-30` は370として既収録。重複追加しない。
6. 遡及resetBehavior QAは **ホークIII（25φ）** から再開する。
7. 毎回GitHub最新mainのREADME/ミッション/INDEX/handoff/既存実ファイルを再取得し、未処理のみ追加する。

## 直近コミット

- 370 レキオ2-30: `1136ff0c65a2ed12f5ec15c184d3a61d1100395f`
- 371 琉球浪漫30: `acb5b86288a8a47785c8b69da0f5386125970d3e`
- 372 緑ドン: `0bb35d10fe275b92a1459b7e883438ccd183a13e`
- ホークIII-30 reset QA: `208c0629e2827c3d7c2f342dc6a14e76f72a7b8d`
