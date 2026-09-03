# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **526**
- latestMachineAdded: **パチスロ戦国無双～猛将伝～**（山佐 / 2010-11-15ホール導入開始）
- latestRecord: `docs/real_machine_db/machines/2010-11-15_sengoku-musou-moushouden.md`
- chronologicalFrontier: **2010-11-15**
- frontierLatestMachine: **パチスロ戦国無双～猛将伝～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前525「パチスロ超時空要塞マクロス」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **525** / chronologicalFrontier **2010-11-15**。
- handoff指定の2010-11-15同日群を継続し、repo未登録の **「パチスロ戦国無双～猛将伝～」** を確認。K-Naviのホール導入開始 **2010-11-15**、山佐公式の稼働時期 **2010年11月**、グリーンべるとの **11月中旬納品予定** を照合し526件目として追加。
- 既存性能値は再調査せず、新規対象の性能コア＋resetBehavior v0.7に限定して収集。

## 526 — パチスロ戦国無双～猛将伝～

- メーカー: **山佐**
- 導入基準: **2010-11-15**（K-Naviホール導入開始）
- 公式稼働時期: **2010年11月**
- 世代/タイプ: **5号機 / A+ART / ARTストック方式**
- BIG: **1/420.10 → 1/394.80**
- BG/REG: **1/630.15 → 1/528.52**
- ボーナス合算: **1/252.06 → 1/225.99**
- ART初当たり: **1/215.7 → 1/134.3**
- 50枚ベース: **33.39 / 33.43 / 33.47 / 33.52 / 33.56 / 33.60G**
- ART「戦国RUSH」: **約+1.1枚/G**。幸村10/20/30G継続率型、半蔵20Gミッション型、慶次は条件達成で無限ART。
- BIG: **MAX217枚**、BG/REG: **56枚**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### 機械割CONFLICT

- P-WORLD等の市場掲載系列: **97.5 / 99.5 / 101.5 / 104.5 / 108.5 / 115.5%**
- 当時パチマガスロマガのシミュレート値: **98.20 / 99.97 / 102.18 / 105.50 / 108.76 / 116.23%**
- 算出条件/定義差の可能性があるため平均せず `CONFLICT` として両系列を保存。

### resetBehavior v0.7 — パチスロ戦国無双～猛将伝～

- 「パチスロ戦国無双～猛将伝～ / 戦国無双猛将伝 / 山佐」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / モード移行率 / ガックン」を組み替え、山佐公式・K-Navi・P-WORLD・当時パチマガスロマガ・業界記事・古い天井系・回顧資料を横断。
- K-Navi本機ページに **「設定変更後の挙動」「モード移行率(設定変更)」** という専用解析項目が現存することを確認。
- ただし検索インデックス/取得可能本文から、その専用ページの具体的な移行先・振り分け数値・天井CLEAR/RETAINを安全に回収できなかったため推定しない。
- 据え置き時の天井進捗・内部モード・ARTストック/潜伏保持は **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の天井進捗・内部モード・ARTストック/潜伏処理は **UNVERIFIED_AFTER_RESEARCH**。
- 天井機能搭載自体はP-WORLD/K-Navi/パチマガスロマガで確認したが、今回アクセス可能な資料から正確なゲーム数・基準・恩恵を複数系統で確定できず **UNVERIFIED_AFTER_RESEARCH**。
- ガックン、初期出目、液晶ステージ等の本機固有変更判別も **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**。

## 主要出典 — パチスロ戦国無双～猛将伝～（取得日 2026-09-04）

- 山佐ネクスト公式: `https://yamasa-next.co.jp/model_sgx/`
- K-Navi: `https://p-kn.com/slot/1296/`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6128`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/175/a.php`
- パチマガスロマガ通常時小役/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/175/c.php`
- パチマガスロマガ確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/175/h.php`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4189/greenbelt`

## 今回のGitHub更新

- 526 パチスロ戦国無双～猛将伝～追加: `docs/real_machine_db/machines/2010-11-15_sengoku-musou-moushouden.md`
- machine record commit: `262d566c60b8541eac14328ce200d080415b635f`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**。
- 次回はmachine treeの実パス順を確認し、怪胴王直後の**最初の実在resetBehavior欠損レコード**を特定して処理する。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 526 / chronologicalFrontier 2010-11-15**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-11-15同日群を継続**。既知未処理候補はニューギン **「エピソードドライブ」**。repo code searchで現時点未登録を確認済み。
3. エピソードドライブはK-Naviで **2010-11-15ホール導入開始**、2010-10-21グリーンべるとで **2010-11-14納品予定（地域差あり）** を確認済み。物流日とホール導入日を混同せず両定義を保持して527件目候補として処理する。
4. 同日群を閉じる前に、11/15前後の地域先行・納品開始日も境界監査し、既登録機を二重追加しない。
5. 50枚ベースやresetBehaviorは型式・メーカー・シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・回顧資料を横断してからUNVERIFIED判定する。
6. 競合値は平均せずCONFLICT。実機完全再現用の細かな内部抽選は収集しない。
