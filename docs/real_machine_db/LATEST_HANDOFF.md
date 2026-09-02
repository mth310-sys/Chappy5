# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **424**
- latestMachine: **Rio2プレミアム**
- latestRecord: `docs/real_machine_db/machines/2009-11-09_rio2-premium.md`
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainのREADME、最新ミッションv0.7、INDEX、既存レコード、直前LATEST_HANDOFFを再読。
- 直前正本は423件目 `青ドン～花火の極～`（2009-11-03）。
- 2009-11-04〜11-08を再監査し、より早い具体日付きの安全な未登録パチスロは今回確定できなかった。
- 2009-11-09ホール導入開始（K-Navi）／2009-11-08納品開始予定（グリーンべると）の `Rio2プレミアム` を424件目として追加。

## 424 — Rio2プレミアム 要約

- メーカー: ネット
- 世代: 5号機
- BIG: `1/385.51 → 1/344.93`
- REG: `1/655.36 → 1/504.12`
- ボーナス合算: `1/242.73 → 1/204.80`
- 50枚ベース: **全設定共通 32.54G**
- BIG実獲得目安: 約210枚
- REG実獲得目安: 約70枚
- ART `Rio Time`: 1セット50G
- ART純増: **CONFLICT** — P-WORLD 約+1.2枚/G vs 当時グリーンべると/K-Navi等 約+1.3枚/G。平均しない。
- 通常天井: **799G**
- 天井恩恵: ART最低3セット＝150G以上

## 機械割 CONFLICT

市場掲載系列（P-WORLD / pacnk）:

`97.8 / 99.7 / 101.5 / 104.1 / 106.6 / 110.3%`

旧パチマガのシミュレートPAYOUT:

`96.06 / 97.89 / 100.23 / 102.03 / 105.36 / 109.07%`

算出条件差を確定できないため平均せず両系列を保持。

## resetBehavior v0.7

- **設定変更**: パチ＆スロ必勝本に「設定変更をすると、天井までのゲーム数はリセットされる」と直接記載。`CEILING_GAME_COUNT_RESET_ON_SETTING_CHANGE_CONFIRMED`。
- **ゲーム数・天井**: 設定変更後は通常799G天井を再スタート。リセット専用短縮天井は確認できず。
- **据え置き**: 設定変更によるカウンタ消去が発生しなければ前日進捗が残る運用が想定されるが、「据え置き時○G引継ぎ」という本機固有の独立直接記載は今回確定できず。高信頼断定しない。
- **電源OFF→ON**: 799Gカウンタ、CZ、ARTストック、RT状態の単純電源再投入時処理を本機固有資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **モード**: ゲーム数解除型の通常モード管理は確認されず。設定変更専用の公開モード振分は未確認。
- **状態**: 設定変更欄にRT移行・終了契機の記載はあるが、変更前ART/CZ/ストック/無限ARTの完全な状態処理は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: 前日天井進捗が設定変更で消える点は明確な不利。設定変更専用の短縮天井・ART/CZ優遇率など公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン、初期出目、液晶・RT挙動等による本機固有の設定変更判別は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## 欠損

- 検定番号 / approvalNumber: `UNVERIFIED_AFTER_RESEARCH`
- 単純電源OFF→ON時の詳細保持処理
- 据え置き時の明文化された天井引継ぎ記述
- 設定変更時のART/CZ/ストック完全状態処理
- ガックン等の変更判別
- 公開された朝一専用当選率・モード振分・恩恵率

## 主要出典（取得日 2026-09-03）

- NET公式 製品情報: `https://www.net-fun.co.jp/product/page/6`
- グリーンべると「『Rio2』に新スペックが登場」2009-10-14: `https://web-greenbelt.jp/00003322/`
- K-Navi Rio2プレミアム: `https://p-kn.com/slot/1075/`
- P-WORLD Rio2プレミアム: `https://www.p-world.co.jp/machine/database/5726`
- パチマガスロマガ旧解析 50枚ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/144/c.php`
- パチマガスロマガ旧解析 ボーナス/シミュレートPAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/144/h.php`
- パチ＆スロ必勝本 設定変更&天井情報: `https://p.hisshobon.jp/machine/1468/1/22075`
- pacnk: `https://pacnk.com/slot/2009/rio2pre/top.php`

## 次回再開地点

1. **2009-11-09同日群の最終監査**から再開する。
2. 同日群により早く扱うべき未登録機がなければ、**2009-11-10以降を具体的なホール導入日順に境界監査**する。
3. 各候補は追加前にrepo内重複検索を必ず実施する。
4. 性能コア＋resetBehavior v0.7を同じ基準で収集し、競合は平均せず`CONFLICT`、十分な再探索後のみ`UNVERIFIED_AFTER_RESEARCH`とする。
5. 完全再現用の詳細抽選は収集対象外。
