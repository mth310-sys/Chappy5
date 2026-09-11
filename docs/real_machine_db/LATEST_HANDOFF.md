更新日: 2026-09-11

## 現在地点
- recordCount: **1365**
- latestRecordAdded: **ハイパーブラックジャック — No.1365**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-08-17_hyper-blackjack.md`
- chronologicalFrontier: **2020-08-17**
- frontierLatestMachine: **ハイパーブラックジャック — No.1365**
- schema: **resetBehavior v0.7**
- status: **2020-08-17_GROUP_CLOSED_AFTER_FULL_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1363「シャア専用パチスロ 逆襲の赤い彗星」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- mainは直前チャット上のNo.1360より先行しており、正本上No.1363まで完了していたため、古い再開地点へ戻らず最新handoffから継続。
- 2020-08-17群の未処理2機 **戦国コレクション4 / ハイパーブラックジャック** をNo.1364 / No.1365として追加。
- 8月導入一覧・当時導入記事・複数解析を横断し、2020-08-17群の追加パチスロ未処理機を固定できなかったため群CLOSED。

## No.1364 — 戦国コレクション4
- path: `docs/real_machine_db/machines/2020-08-17_sengoku-collection4.md`
- manufacturer: **コナミアミューズメント**
- formalModel: **S戦国コレクション4KF**
- certificationNumber: **0S0139**
- releaseDate: **2020-08-17**
- generation/system: **6.1号機 / 高純増ストレートAT / 規定コレポイント管理 / シナリオ管理型**
- 出玉率: **97.0 / 98.3 / 100.5 / 104.1 / 108.3 / 110.2%**
- 夢幻の間初当たり: **1/399.4 / 1/392.9 / 1/381.8 / 1/362.0 / 1/337.1 / 1/241.6**
- 鬼ヶ島チャレンジ: **1/213.4 / 1/212.5 / 1/209.6 / 1/205.5 / 1/200.9 / 1/211.5**
- base: **約51.5G/50枚**
- netIncrease: **約10枚/G**
- 基本AT: 夢幻の間10G+α、夢幻海ラッシュ1セット20G+α。
- 天井: 最大1216コレで夢幻の間。モード別最大はA1216 / B768 / C992 / 天国256コレ。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_DATA**

### resetBehavior v0.7 — No.1364
- 設定変更: **天井/規定コレRESET、内部状態RESET、モード移行抽選を実施、有利区間新規開始**。
- 据え置き/純電源OFF→ON: **内部天井/規定コレ・内部状態CARRY_OVER**。
- 朝一は設定変更/据え置きともカードステージから開始するため、カードステージだけでは判別不可。
- 通常時有利区間ランプは基本消灯型で、朝一消灯だけでは変更判別不可。
- 朝一水墨画ステージは非有利区間経由＝設定変更濃厚（前日0Gヤメ等の例外あり）。
- 有利区間移行時のランプ点灯率: **通常A約0.4%、通常B/C/天国約6.3%**。
- 後発解析で設定変更後（有利区間リセット後）の天国移行率 **約25%**。一方、通常時全般の天国移行率「設定1でも33%以上」は別定義なので混同せず保持。
- 設定変更時の全モード振り分け、専用高確開始率、本機固有ガックン条件/率は十分再探索後も未固定。

## No.1365 — ハイパーブラックジャック
- path: `docs/real_machine_db/machines/2020-08-17_hyper-blackjack.md`
- manufacturer canonical: **ネット**
- manufacturer conflict: 一部攻略資料は **カルミナ（NET系）** 表記。canonicalは業界記事/型式DBのネット。
- formalModel: **SハイパーブラックジャックZG**
- certificationNumber: **0S0528**
- releaseDate: **2020-08-17**
- generation/system: **6号機 / 疑似ボーナス+ST / ボーナスストック型AT**
- 出玉率: **97.9 / 99.2 / 100.7 / 104.3 / 107.2 / 110.1%**
- ボーナス初当たり: **1/360.8 / 1/339.4 / 1/261.9 / 1/243.4 / 1/201.1 / 1/174.9**
- ST当選: **1/834.3 / 1/763.1 / 1/535.8 / 1/473.2 / 1/395.0 / 1/308.4**
- base: **約51.5G/50枚**
- netIncrease: **約6.1枚/G**
- 基本獲得: HYPER BIG平均約184枚 / 初当たりBIG平均約146枚 / ST中BIG平均約129枚 / REG平均約49枚。
- ST: 30G再セット型、ループ率約86%、突入時期待約750枚。STH期待1,200枚over。
- 天井: 通常A/C777G+α、通常B577G+α、レジェンド77G+α。
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_INITIAL_POINT_DATA**

### resetBehavior v0.7 — No.1365
- 設定変更: **内部天井G/周期RESET、ポイント再抽選、非有利区間へ、有利区間ランプ消灯**。
- 据え置き/純電源OFF→ON: **内部天井G・周期・ポイント・内部状態・有利区間CARRY_OVER**。
- ただし据え置きでも液晶は0G / 1周期目 / ポイント???へ戻るため、表示と内部値を分離。
- 通常時ランプ点灯型。朝一消灯＝変更濃厚、点灯＝据え置き濃厚。ただし店側1G回し等の対策例外あり。
- 有利区間移行時/ポイントMAX後前兆終了後の初期pt: **0pt 70.3 / 1000〜4000pt各6.3 / 5000pt3.1 / 7500pt1.6%**。
- 有利区間移行時のモード抽選公開例（弱チェリー/スイカ成立時）: 設定1 **A48.8/B20.9/C23.3/レジェンド7.0%**、設定6 **A7.5/B30.6/C44.7/レジェンド17.2%**。設定変更専用固定表ではなく有利区間移行時抽選として保存。
- 本機固有ガックン条件/率は再探索後も未固定。

## 2020-08-17群監査
- 2020新台導入日カレンダーは8/17パチスロとして **S戦国コレクション4KF / SハイパーブラックジャックZG** の2機を掲載。
- 当時グリーンべると/遊技日本も両機それぞれの8/17全国導入を個別報道。
- 1gekiの2020年8月新台集計は月内パチスロ3機。8/3のシャア専用パチスロ逆襲の赤い彗星と8/17の上記2機で3機となり、8/24・8/31の独立追加パチスロは確認できず。
- 別型式・別スペック・PB・地域差・延期機も横断したが、8/17群へ追加すべき未処理機は固定できず。
- 群判定: **CLOSED_AFTER_FULL_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理: `docs/real_machine_db/machines/2007-04-15_kuma-sakaba.md`（熊酒場）。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）**。
- 今回は本線2020-08-17群2機の収集と群監査を優先し、遡及QAの順番は変更していない。

## 次回本線の再開地点
- 最新main再同期後、**2020-09-07群**へ進む。
- 先頭確認済み候補: **アナターのオット!?はーです — No.1366候補**（ミズホ / 型式 `S/アナターのオット!?はーです/BR`、検定番号は次回型式資料で再固定）。
- 2020新台カレンダーでは9/7のパチスロは同機を確認。
- 一部旧販売予定表に9/7「回胴黙示録カイジ～沼～」があるが、実導入日は後ろへ延期された資料があるため9/7群へ即登録せず、次回実導入日を複数ソースで再固定して扱う。
- その後、9/23群 **リングにかけろ1 ワールドチャンピオンカーニバル編 / 対魔導学園35試験小隊** を候補として時系列監査する。

## GitHub保存
- No.1364追加 commit: `646dd63c4e86b03ba1f6bce06aaabfd35059964d`
- No.1365追加 commit: `7f819da5f417ba751520834152e6dd44c1cdfbd4`

## 主要出典 — 取得日 2026-09-11
### No.1364 戦国コレクション4
- コナミ公式: https://www.konami.com/amusement/psm/archive/ps/2020/sengokucollection4/
- 検定情報: https://news.p-world.co.jp/articles/13465/yugitsushin
- グリーンべると: https://web-greenbelt.jp/post-40479/
- HAZUSE: https://hazuse.com/machine/pachislot/0S0139/
- P-WORLD: https://www.p-world.co.jp/machine/database/9204
- すろぱちくえすと設定: https://www.slopachi-quest.com/article/sengoku-collection4-settei/
- すろぱちくえすと朝一: https://www.slopachi-quest.com/article/sengoku-collection4-tenjou/
- スロットセブン: https://slot-seven.com/sengokucollection4-tenzyou/
- 必勝本カードステージ: https://p.hisshobon.jp/machine/3529/1/78771
- 期待値見える化だくお: https://note.com/dakuo_slot/n/n1b4120a6f071
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/12/tj04.php

### No.1365 ハイパーブラックジャック
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/14410/greenbelt
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-36911/
- HAZUSE: https://hazuse.com/machine/pachislot/0S0528/
- イチカツ: https://ichikatsu.com/hbj/
- 期待値見える化: https://slotjin.com/tenjoukitaichi/enako/
- 1gekiモード: https://1geki.jp/slot/s_hbj/44/
- 1gekiボーナス: https://1geki.jp/slot/s_hbj/61/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/179/tj04.php
- なな徹天井: https://nana-press.com/kaiseki/machine/83/1565/

### 2020-08-17群 / 次回境界
- 2020新台カレンダー: https://pachinkopachisro.com/archives/53951811.html
- 2020年スロ新台一覧（販売予定差確認）: https://kaiseki.sulopachinews.com/archives/2369
