# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **525**
- latestMachineAdded: **パチスロ超時空要塞マクロス**（SANKYO / 2010-11-15ホール導入開始）
- latestRecord: `docs/real_machine_db/machines/2010-11-15_choujikuu-yousai-macross.md`
- chronologicalFrontier: **2010-11-15**
- frontierLatestMachine: **パチスロ超時空要塞マクロス**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前524「月面兎兵器ミーナ」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **524** / chronologicalFrontier **2010-11-14**。
- handoff指定の2010-11-15同日群を継続し、repo未登録の **「パチスロ超時空要塞マクロス」** を確認。K-Naviのホール導入開始 **2010-11-15** とSANKYO公式の導入年月 **2010.11** を照合し525件目として追加。
- 既存性能値は再調査せず、新規対象の性能コア＋resetBehavior v0.7に限定して収集。

## 525 — パチスロ超時空要塞マクロス

- メーカー: **SANKYO**
- 導入基準: **2010-11-15**（K-Naviホール導入開始）
- 公式導入年月: **2010.11**
- 型式: **超時空要塞マクロスZG**（SANKYO公式）
- 世代/タイプ: **5号機 / A+ART / セットストック型ART**
- 機械割: **96.8 / 98.3 / 100.1 / 103.9 / 107.7 / 112.0%**
- BIG: **1/428 → 1/394**
- ATTACK BONUS / REG相当: **1/648 → 1/508**
- ボーナス合算: **1/258 → 1/222**
- ボーナス＋ART合算: **1/111 → 1/83**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART「バルキリータイム」: **50G / 約+1.5枚/G / セットストック**
- PREMIUM/赤7 BIG: **約304枚**、青7 BIG: **約206枚**、ATTACK BONUS: **約32枚**
- 通常天井: **ボーナス間またはART間888G → 天井状態 / ART大量ストック**
- coreStatus: **PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — パチスロ超時空要塞マクロス

- 「超時空要塞マクロス / 超時空要塞マクロスZG / SANKYO」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 888G / モード / ガックン」を組み替え、メーカー公式・P-WORLD・K-Navi・パチマガスロマガ・pacnk・古い天井/回顧資料を横断。
- 通常天井 **ボーナス間またはART間888G** と、通常/高確/超高確の3内部モードは確定。
- ただし設定変更時の888GカウンタCLEAR/RETAIN、設定変更時のモード再抽選/固定、高確スタート、ARTストック/潜伏処理は直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の888G進捗・内部モード・ARTストック保持は **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ON時の888G進捗・内部モード・ARTストック/潜伏処理は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用短縮天井、朝一専用当選率/ARTストック、高確振り分け等の公開数値は **NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH**。
- ガックン、初期出目、液晶/ランプ等の変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は5号機のため **NOT_APPLICABLE**。
- resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**。

## CONFLICT / 注意 — パチスロ超時空要塞マクロス

- 後年「5号機クロニクル」の本機欄には、SANKYO公式/K-Navi/P-WORLD/pacnkと大きく異なるボーナス・ART初当たり系列や後続マクロス系を混同したように見える記述が含まれる。主系列へ平均統合せず **CONFLICT / POSSIBLE_SERIES_CONTAMINATION** として隔離。
- 2026年の一部自動生成回顧ページには本機を「6号機」と誤記する箇所がある。P-WORLD・当時資料および2010年機であることから本DBでは **5号機** とする。
- ART単独初当たりは今回の高信頼資料で直接表を回収できず、ボーナス＋ART合算から逆算して作らない。

## 主要出典 — パチスロ超時空要塞マクロス（取得日 2026-09-04）

- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/537/`
- K-Navi: `https://p-kn.com/slot/1290/`
- P-WORLD機種DB: `https://www.p-world.co.jp/machine/database/6116`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/22/a.php`
- pacnk: `https://pacnk.com/slot/tools/sh_macross.html`
- 5号機クロニクル（CONFLICT検出用）: `https://5goki.com/sankyo`

## 今回のGitHub更新

- 525 パチスロ超時空要塞マクロス追加: `docs/real_machine_db/machines/2010-11-15_choujikuu-yousai-macross.md`
- machine record commit: `550c7fef12e7fdfd41cab9c53c063d0030e1e2ba`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**。
- 次回はmachine treeの実パス順を確認し、怪胴王直後の**最初の実在resetBehavior欠損レコード**を特定して処理する。タイトル推測でQA済み範囲を進めない。
- COMPLETE_CORE性能判定はreset欠損のみを理由に崩さず、reset QA状態を別管理する。

## 次回再開地点

1. **recordCount 525 / chronologicalFrontier 2010-11-15**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-11-15同日群を継続**。既知未処理候補は **「パチスロ戦国無双～猛将伝～」「エピソード ドライブ」**。repo重複を確認し、具体的導入/納品日をK-Navi・P-WORLD・業界記事・メーカー資料で照合して最古未登録から処理する。
3. 同日群を閉じる前に、11/15前後の地域先行・納品開始日も境界監査し、既登録機を二重追加しない。
4. 50枚ベースやresetBehaviorは型式・メーカー・シリーズ名＋設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・回顧資料を横断してからUNVERIFIED判定する。
5. 競合値は平均せずCONFLICT。実機完全再現用の細かな内部抽選は収集しない。
