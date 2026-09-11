更新日: 2026-09-11

## 現在地点
- recordCount: **1368**
- latestRecordAdded: **パチスロ 対魔導学園35試験小隊 — No.1368**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-09-23_taimadou-gakuen-35-shiken-shoutai.md`
- chronologicalFrontier: **2020-09-23**
- frontierLatestMachine: **パチスロ 対魔導学園35試験小隊 — No.1368**
- schema: **resetBehavior v0.7**
- status: **2020-09-23_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1367「PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 正本上の次の未処理候補 **パチスロ 対魔導学園35試験小隊** をNo.1368として追加。
- 2020-09-23群はリングにかけろ1 WCC / 対魔導学園35試験小隊の2機を処理。新台カレンダー、当時導入資料、機種DBを再監査し、同日へ追加すべき別パチスロを固定できなかったためCLOSED。
- 次の明確な導入群は **2020-10-05**。少なくとも **S笑ゥせぇるすまん 絶笑SJ / S吉宗3 EA5** を確認。
- 「回胴黙示録カイジ～沼～」は2020-10-19実導入候補として、その時系列地点まで保留。

## No.1368 — パチスロ 対魔導学園35試験小隊
- path: `docs/real_machine_db/machines/2020-09-23_taimadou-gakuen-35-shiken-shoutai.md`
- manufacturer: **平和 / オリンピア**
- formalModel: **S対魔導学園35試験小隊H1**
- certificationNumber: **9S1900**
- releaseDate: **2020-09-23**
- generation/system: **6号機 / ゲーム数上乗せ型AT / CZ経由+直撃 / 有利区間管理**
- 出玉率: **97.3 / 99.0 / 101.1 / 105.1 / 107.9 / 110.2%**
- AT初当たり: **1/588.2 / 1/494.4 / 1/450.9 / 1/360.8 / 1/324.5 / 1/292.7**
- base: **HAZUSE設定1 約42.5G/50枚**。別資料の約39.9G/50枚とは `BASE_CONFLICT_42.5G_VS_39.9G` として分離。
- netIncrease: **約2.2枚/G**
- ATは「Embrace RUSH」で初期G数決定。必勝本では平均上乗せ100G以上。
- 天井: 有利区間移行後通常時最大 **555G（523G+前兆32G）**。いつどこゾーン介入時は最大35G先送り可能。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMERIC_DATA**

### resetBehavior v0.7 — No.1368
- 設定変更: **有利区間RESET→非有利区間、天井G RESET、内部モードRESET/再抽選、内部状態RESET/再抽選**。
- 据え置き/純電源OFF→ON: **有利区間・天井進行・内部モード・内部状態をCARRY_OVER**。
- 朝一有利区間ランプ: 点灯=据え置き濃厚、消灯=設定変更濃厚。ただし前日状況・店側対策例外あり。
- 非有利区間中はテンションカウンターに黄色いテープ表示が出るため、未対策なら朝一画面でもリセット推測可能。
- 設定変更専用固定短縮天井・AT直撃保証は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 公開朝一比較値として有利区間開始時モード振り分けを保存。レア小役以外: **通常78.9 / 優遇19.9 / 引き戻し0.8 / フリーズ0.4%**。レア小役: **優遇83.2 / 引き戻し15.6 / フリーズ1.2%**。
- モード別天井: 通常/引き戻し **333G 0.4 / 560G 99.6%**、優遇 **111G 0.4 / 333G 1.2 / 560G 98.4%**。
- 有利区間開始時内部状態: 通常/引き戻し **通常87.5 / 高確11.7 / 超高確0.8%**、優遇 **高確88.3 / 超高確11.7%**。
- 本機固有ガックン条件/発生率は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## 2020-09-23群監査 — CLOSED
- **PACHISLOT リングにかけろ1 ワールドチャンピオンカーニバル編**: No.1367処理済み。
- **パチスロ 対魔導学園35試験小隊**: No.1368処理済み。
- 2020年新台カレンダー、当時導入記事、HAZUSE/攻略機種DBを再横断し、9/23同日へ追加すべき別パチスロを固定できず **CLOSED**。
- 次群は2020-10-05。公開カレンダーでは **S笑ゥせぇるすまん 絶笑SJ（三洋） / S吉宗3 EA5（サボハニ）** を確認。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理: `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。
- 性能側 `coreStatus: PARTIAL` は維持。
- reset側を **`PARTIAL_RESEARCH_EXHAUSTED`** へ正式化。
- 通常時ゲーム数天井・短縮天井・朝一専用モード/恩恵は確認なし。有利区間は制度導入前。
- ART「アンコールタイム」「ダンスライブ」の設定変更/据え置き/純電断時残状態・内部状態、ガックン等の本機固有変更判別は、検索語・資料系統を変えて再探索しても直接契約を固定できず推測補完していない。
- Git追加履歴でダンス☆マン直後の実機追加を確認し、次回遡及QAは **`docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）**。

## 次回本線の再開地点
- 最新main再同期後、**2020-10-05群**を開始。
- 先頭候補: **S笑ゥせぇるすまん 絶笑SJ — No.1369候補**。その後 **S吉宗3 EA5**。
- 10/5群処理後、全メーカー・別型式・別スペック・PB・地域差・延期機まで横断監査してCLOSED可否を判定する。
- 「回胴黙示録カイジ～沼～」は2020-10-19候補として保留継続。

## GitHub保存
- No.1368追加 commit: `cca43ba07bf03eeef73b5dcc6e6bd97dd5e0b1ac`
- ダンス☆マン resetBehavior QA commit: `a781a3797ae0d7fade9a8a3aad97b8cd00044b2e`

## 主要出典 — 取得日 2026-09-11
### No.1368 対魔導学園35試験小隊
- HAZUSE 基本: https://hazuse.com/machine/pachislot/9S1900/genre/201/
- HAZUSE 天井/設定変更: https://hazuse.com/machine/pachislot/9S1900/genre/207/
- 1geki: https://1geki.jp/slot/s_35s/
- パチマガスロマガ AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/44/at02-1.php
- パチマガスロマガ 内部状態: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/44/tj08.php
- なな徹 モード: https://nana-press.com/kaiseki/machine/84/1824/
- 必勝本: https://p.hisshobon.jp/machine/3544/1/78656
- すろぱちくえすと: https://www.slopachi-quest.com/article/taimadougakuen-tenjou/

### 2020-10-05境界
- 2020新台導入カレンダー: https://pachinkopachisro.com/archives/53951811.html
- 吉宗3導入記事: https://news.p-world.co.jp/articles/14751/greenbelt

### 遡及QA ダンス☆マン
- グリーンべると: https://web-greenbelt.jp/00004090/
- 5号機クロニクル: https://5goki.com/aristocrat
- パチ7回顧: https://pachiseven.jp/articles/detail/11837
