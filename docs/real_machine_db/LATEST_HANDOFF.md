# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは256件地点 `神たま（2008-05-25）` まで完了。
- 今回、境界監査で同じ2008-05-25納品開始予定の未処理機 `ニューパルサーエボリューション` を確認し、**257件地点**まで前進。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。今回は新規収集を優先し遡及QAは進めていない。

## 257. ニューパルサーエボリューション（山佐）

- record: `docs/real_machine_db/machines/2008-05-25_new-pulsar-evolution.md`
- commit: `da86acfa7082918360028b97a9bde9a0f1a1c69e`
- modelName: `ニューパルサーEVO`
- releaseDate: `2008-05-25`
- systemType: ノーマル/Aタイプ・4thリール・技術介入
- coreStatus: `COMPLETE_CORE_WITH_RELEASE_DATE_CONFLICT`
- resetBehaviorQA: `PARTIAL_STRUCTURE_CONFIRMED_NO_RESET_NUMERIC_DATA`

### 時系列修正

- 直前handoffでは `ニューパルサーエボリューション` を5/26候補としていたが、グリーンべると2008-05-09記事で **「納品は5月25日からスタート予定」** を直接確認。
- 山佐ネクスト現行公式は **稼働時期2008年6月** とするため、納品開始日と稼働月の定義差を `CONFLICT_RELEASE_DATE_DEFINITION` として保持。
- 5号機クロニクルの2008年10月表記は、当時記事およびメーカー公式と大きく乖離するため低優先の競合資料として記録した。

### 主要性能

設定 `1〜6`。

- BIG: `1/266.4 / 1/258.0 / 1/250.1 / 1/242.7 / 1/240.9 / 1/240.9`
- REG: `1/468.1 / 1/452.0 / 1/422.8 / 1/385.5 / 1/343.1 / 1/302.0`
- 合成: `1/169.8 / 1/164.2 / 1/157.2 / 1/148.9 / 1/141.5 / 1/134.0`
- 機械割: `97.8 / 99.4 / 101.3 / 103.9 / 106.3 / 108.6%`（5号機クロニクル。設定6約109%という当時記事丸め値と概ね整合）
- baseGamesPer50: **約32G/1000円**（グリーンべると）
- BIG: 平均約326枚 / 技術介入最大333枚
- REG: 平均約113枚 / 技術介入最大117枚
- ノーマルタイプのためRT/ART純増は `NOT_APPLICABLE`

### CONFLICT

- `CONFLICT_RELEASE_DATE_DEFINITION`
  - グリーンべると: 2008-05-25納品開始予定
  - 山佐ネクスト公式: 稼働時期2008年6月
  - 5号機クロニクル: 2008年10月（低優先競合）
- `CONFLICT_BASIC_PAYOUT_SECONDARY`
  - 当時グリーンべると: BIG平均326枚 / REG平均113枚、技術介入最大333枚 / 117枚
  - 5号機クロニクル: BIG約312枚 / REG約104枚
  - 平均・最大・後年整理値を混ぜず、当時業界記事とパチマガスロマガ最大値を主採用。

### v0.7 resetBehavior

- 本機は通常時ゲーム数天井・周期CZ・RT/ART・通常モード構造を持たないノーマルタイプとして確認。
- `gameCounterReset`: `NOT_APPLICABLE_CONFIRMED_STRUCTURE`
- `ceilingAfterReset`: `NONE_CONFIRMED`
- `modeAfterReset`: `NOT_APPLICABLE_CONFIRMED_STRUCTURE`
- `stateAfterReset`: `NOT_APPLICABLE_CONFIRMED_STRUCTURE`
- `advantageousSectionReset`: `NOT_APPLICABLE`
- 朝一専用恩恵/不利・公開朝一数値: `NONE_CONFIRMED`
- 設定変更・据え置き・電源OFF→ON時の本機固有初期出目/リール挙動、ガックン等は、表記揺れ・型式名と検索語を変更して再探索したが直接根拠不足のため `UNVERIFIED_AFTER_RESEARCH`。
- パチマガスロマガ現存インデックスでは `攻め時・ヤメ時・設定変更時` 節の存在まで確認したが、今回その本文を取得できなかったため設定変更処理を推測で確定していない。

## 今回の主要出典

取得日: 2026-09-01

### ニューパルサーエボリューション
- https://news.p-world.co.jp/articles/2832/greenbelt
- https://yamasa-next.co.jp/model_npe/
- https://hazuse.com/machine/pachislot/8S0117/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/157/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/157/e.php
- https://5goki.com/yamasa
- https://p-mans.blogspot.com/2008/05/
- https://www.p-world.co.jp/machine/database/5188

## 重複防止

- 既存256件の再追加禁止。
- 257 `ニューパルサーエボリューション` も再追加禁止。
- `ニューパルサーエボリューション` は5/26候補ではなく **5/25納品開始予定** として処理済み。
- `犬キングX` は再監査でP-WORLDが **2008年8月導入** と明記しているため、5/26候補から除外して8月キューへ送る。型式 `イヌキングX`。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準257件地点。2008-05-25 `神たま` / `ニューパルサーエボリューション` まで完了。**
2. 2008-05-20〜25をメーカー別一覧・旧DB・当時記事で最終監査し、5/25同日未処理がなければ5/26以降へ進む。
3. 直前候補 `犬キングX` は2008年8月導入と確認したため5月キューから除外。再追加禁止ではなく8月時点で未処理なら登録する。
4. `ヒミコスタイルA / ヒミコスタイル` は2008-05-15発表会、5/20業界記事、性能解析までは確認済みだが、具体的なホール導入日は今回確定できていない。次回、エール/型式/旧DB/当時ホール導入記録へ検索を広げ、5月末か6月かを確定してから登録する。
5. 5/26以降の既知候補を具体日で並べ直し、同日他メーカー漏れも横断監査する。
6. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
7. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
