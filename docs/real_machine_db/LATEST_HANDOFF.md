# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **520**
- latestMachineAdded: **天空のシンフォニア**（コルモ / 全国一斉導入基準 2010-10-16）
- latestRecord: `docs/real_machine_db/machines/2010-10-16_tenkuu-no-symphonia.md`
- chronologicalFrontier: **2010-10-16**
- frontierLatestMachine: **天空のシンフォニア**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **519** / chronologicalFrontier **2010-10-04** / latestMachineAdded **出番だ！葉月ちゃん**。
- K-Navi 2010年10月導入カレンダーを再監査し、10月5〜15日にパチスロ掲載がなく、次節点が **2010-10-16 コルモ「天空のシンフォニア」**であることを確認。
- パチビーには本機の導入日を2010-10-04とする資料があるため、地域先行/集計基準差としてCONFLICT保持。K-Navi全国一斉導入基準2010-10-16を時系列主値とした。
- 既登録性能値は再調査せず、新規対象の性能コア＋resetBehavior v0.7に限定して収集した。

## 520 — 天空のシンフォニア

- メーカー: **コルモ**
- 全国一斉導入基準: **2010-10-16**（K-Navi）
- 別日付資料: **2010-10-04**（パチビー） → `CONFLICT`
- 世代/タイプ: **5号機 / ART専用 / ボーナス非搭載 / セット数ストック型**
- 設定構成: **1 / 2 / 5 / 6 の4段階**
- 機械割: **97.0 / 99.0 / 110.0 / 119.0%**（全表は回顧単一、設定6=119.0%は別系統照合）
- ART初当たり: **1/146 / 1/137 / 1/116 / 1/103**
- 50枚/1000円: **UNVERIFIED_AFTER_RESEARCH**
- ART「封印モード」: **1セット30G / 約+2.0枚/G / 約60枚**
- 最大25セット上乗せの可能性
- 通常天井: **ART終了後999Gで超高確状態へ移行**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — 天空のシンフォニア

- K-Naviに本機固有の「モード移行(ART・設定変更)」、パチマガスロマガに「設定変更」専用解析項目が現存することは確認。
- ただし具体的な設定変更時モード振り分け本文/数値は今回の取得経路では回収できず、別検索・当時解析・回顧資料まで再探索しても確定できなかったため **UNVERIFIED_AFTER_RESEARCH**。一般的ART機挙動から補完しない。
- ART終了後999Gの通常天井は確定。一方、初代2010年版について設定変更時に999GカウンタがCLEAR/RETAINのどちらか、据え置き時のカウンタ/モード/ストック保持、単純電源OFF→ON時の処理は直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 2012年続編「天空のシンフォニア～光を求めて～」には901G天井・設定変更リセット情報があるが**別機種**のため初代へ転記しない。
- 設定変更専用の短縮天井、朝一ART確定、公開朝一当選率など比較可能な恩恵数値は **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。
- ガックン、初期出目、液晶/ランプ等による変更判別も本機固有の直接根拠を確定できず。
- 有利区間は5号機のため **NOT_APPLICABLE**。

## CONFLICT / 注意

- 導入日: K-Navi全国一斉導入 **2010-10-16** / パチビー **2010-10-04**。グリーンべると2010-08-24発表時点でAPEC入替自粛により地域ごとに納品時期が異なると明記しており、定義差・地域差を平均化しない。
- 50枚ベースは定量値を確定できず、当時実戦の「コイン持ちは若干悪く感じる」という定性記述から推定しない。
- 2012年続編「光を求めて」の情報混入に注意。初代は999G、続編は901Gで別機種。

## 主要出典（取得日 2026-09-04）

- グリーンべると: `https://web-greenbelt.jp/00006635/`
- K-Navi機種ページ: `https://p-kn.com/slot/1276/`
- K-Navi 2010年10月導入カレンダー: `https://p-kn.com/calendar/201010/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6088`
- パチビー: `https://www.pachibee.jp/machines/about/210080002`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/08/colmo_slot_08.php`
- スロット戯言 回顧: `https://enchantress2009.blog.fc2.com/blog-entry-3140.html`
- PachiSeven 5号機高機械割回顧: `https://pachiseven.jp/articles/detail/14268`
- K-Navi前兆: `https://p-kn.com/slot/1276/27391/`
- K-Navi天空チャンス: `https://p-kn.com/slot/1276/27393/`

## 今回のGitHub更新

- 520 天空のシンフォニア追加: `docs/real_machine_db/machines/2010-10-16_tenkuu-no-symphonia.md`
- レコード追加commit: `3160571d58c1caa93130fc1c134a327cdb0286b8`
- LATEST_HANDOFF: このコミット

## 遡及QA継続地点

- **ジャックポット・トロピカルバージョンまで補完済み**。
- machine tree上の次の候補は `docs/real_machine_db/machines/2006-11_kaidouou.md`。resetBehavior欠損なら次回QA対象。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 520 / chronologicalFrontier 2010-10-16**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを必ず再取得。
2. 2010-10-16同日・地域先行機の漏れをメーカー別/当時業界記事で最終監査し、天空のシンフォニアを重複追加しない。
3. **2010-10-17境界を監査**。未登録がなければK-Navi基準 **2010-10-18「舞-HiME」（岡崎産業）**を521件目候補として進む。
4. 同日次候補は **「ジャイアン」（ニューアーク）**。
5. 遡及QAは `2006-11_kaidouou.md` を次候補とする。
