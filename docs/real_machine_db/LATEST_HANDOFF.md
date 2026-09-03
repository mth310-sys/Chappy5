# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **517**
- latestMachineAdded: **ロケットパニック**（JPS / 全国一斉導入基準 2010-10-04）
- latestRecord: `docs/real_machine_db/machines/2010-10-04_rocket-panic.md`
- chronologicalFrontier: **2010-10-04**
- frontierLatestMachine: **ロケットパニック**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **516** / chronologicalFrontier **2010-10-04** / latestMachineAdded **ビッグシオV**。
- LATEST_HANDOFF指定の2010-10-04同日群を継続し、repo未登録の**ロケットパニック**を517件目として追加。
- K-Naviは全国一斉導入開始2010-10-04。P-WORLD/5号機クロニクルは2010年09月（月粒度）を掲載するため、全国一斉導入日と先行地域/月粒度メタデータを分離して保持した。
- 遡及QAではmachine treeを再確認し、`2006-11_jack-to-mamenoki.md`直後の実在resetBehavior欠損pathを **`2006-11_jackpot-tropical-version.md`** と一意確定。resetBehavior v0.7を追補した。

## 517 — ロケットパニック

- メーカー: **JPS**
- 全国一斉導入基準: **2010-10-04**
- 先行地域/月粒度記録: **2010-09**（P-WORLD / 5号機クロニクル）
- 世代/タイプ: **5号機 / A+ART / ボーナス契機ART**
- 型式: **ロケットパニック2**
- 検定番号: **9S1020**
- 機械割: **96.5 / 98.8 / 100.2 / 103.5 / 106.8 / 110.2%**
- PB: **1/341.3 → 1/309.1**
- CB: **1/150.3 → 1/151.7**（設定ごと非単調。設定3は現存パチマガページ誤記疑いを別管理）
- ボーナス合算: **1/104.4 → 1/101.8**
- 50枚/1000円: **UNVERIFIED_AFTER_RESEARCH**
- PB: **最大約54枚** / CB: **最大約48枚**
- ART「パニックモード」: **20/40/80G**
- ART純増: **CONFLICT 約+1.8枚/G（パチマガ） / 約+1.9枚/G（P-WORLD）**
- 天井/救済: **ボーナス20回連続ART非突入で天井ART**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — ロケットパニック

- 現存パチマガスロマガ機種ページに「朝イチ・設定変更」専用解析項目が存在することまでは確認。
- ただし詳細本文を現存クロールから回収できず、**設定変更時のボーナス20回天井進捗clear/retain、内部モード、ARTストック/潜伏/CZ、据え置き、単純電源OFF→ON**は `UNVERIFIED_AFTER_RESEARCH`。
- 通常の救済条件は**ボーナス20回連続ART非突入**。固定ゲーム数天井とは分離。
- 設定変更専用の短縮天井、朝一ART確率、高確移行率、ガックン/初期出目等の変更判別数値は確認できず。
- 有利区間は5号機のため **NOT_APPLICABLE**。
- 一般的な5号機挙動から推測補完しない。

## 遡及QA — ジャックポット・トロピカルバージョン

- 対象path: `docs/real_machine_db/machines/2006-11_jackpot-tropical-version.md`
- 既存性能コアは維持し、`coreStatus: COMPLETE_CORE_RESET_QA_PARTIAL`としてreset QAを別管理。
- 当時業界記事は岡崎産業5号機第1弾・BIG+REGのノーマル機として紹介。後年保存スペックもノーマルタイプで整合。
- 再探索でも通常ゲーム数天井、ART/RT残G、ゲーム数モード、朝一専用短縮/高確等は確認できず。
- 設定変更/据え置き/単純電源OFF→ONの低レベル内部処理、ガックン/初期出目等は `UNVERIFIED_AFTER_RESEARCH`。
- 後年設定判別資料はBIG/REG/オレンジの数値判別を中心とし「設定示唆なし」。これは朝一設定変更確定判別ではないため混同しない。
- 有利区間は **NOT_APPLICABLE**。
- 遡及QA進捗は**ジャックポット・トロピカルバージョンまで補完済み**へ前進。

## CONFLICT / 注意

- ロケットパニック導入時期: K-Navi **2010-10-04全国一斉導入開始**、P-WORLD/5号機クロニクル **2010年09月**。地域先行/月粒度メタデータの可能性を別フィールド保持。
- ロケットパニックART純増: パチマガ **約+1.8枚/G**、P-WORLD **約+1.9枚/G**。平均化せずCONFLICT。
- ロケットパニックCB設定3: 現存パチマガページは **1/248.9** と表示するが同ページ合算1/103.0と不整合。別保存資料 **1/148.9** は合算と整合するため採用値1/148.9、元値は誤記疑いで保持。
- ジャックポット・トロピカルバージョン設定1機械割は既存CONFLICT（96.18〜96.2% / 98.18%）を維持し、reset QAのために性能完了判定を崩していない。

## 主要出典（取得日 2026-09-04）

### ロケットパニック
- K-Navi 2010年10月導入カレンダー: `https://p-kn.com/calendar/201010/`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/23/a.php`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/23/h.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6078`
- 5号機クロニクル JPS一覧: `https://5goki.com/jps`
- ホームスロット保存スペック: `https://home-slot.net/SHOP/s-jps22.html`
- 2010年業界資料保存: `https://paperzz.com/doc/5546047/2010`

### ジャックポット・トロピカルバージョン reset QA
- P-WORLD/グリーンべると当時記事: `https://news.p-world.co.jp/articles/1861/greenbelt`
- 5号機クロニクル 岡崎産業一覧: `https://5goki.com/okazaki`
- 保存スペック: `https://pachinko.hatenablog.jp/entry/2006/10/jackpot-tropical-version`
- pacnk 設定判別: `https://pacnk.com/slot/tools/sh_jakkupottotoropikaruv2006.html`

## 今回のGitHub更新

- 517 ロケットパニック追加: `docs/real_machine_db/machines/2010-10-04_rocket-panic.md`
- レコード追加commit: `89dd87970331871b40e49551f3b27e0d115c1277`
- 遡及QA追補: `docs/real_machine_db/machines/2006-11_jackpot-tropical-version.md`
- QA追補commit: `b79870b4e3a2d4c6765860ce89060dbe0f6d1747`
- LATEST_HANDOFF: このコミット。

## 次回再開地点

1. **recordCount 517 / chronologicalFrontier 2010-10-04**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. 2010-10-04同日群を継続。次候補は **極お父さん ～舞い降りた天使???～ / 出番だ!葉月ちゃん**。**パチスロピンポンは515で登録済みのため重複追加禁止**。
3. 同日群を閉じた後、2010-10-05〜10-15境界を監査し、次節点2010-10-16「天空のシンフォニア」へ進む。
4. 遡及QAは**ジャックポット・トロピカルバージョンまで補完済み**。machine tree上の次の実在path **`2006-11_kaidouou.md`** をresetBehavior欠損確認し、欠損なら次回QA対象とする。
5. COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。
