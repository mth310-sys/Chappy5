# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **666**
- latestMachineAdded: **鉄のラインバレル**（スパイキー）
- latestRecord: `docs/real_machine_db/machines/2012-06-18_kurogane-no-linebarrels.md`
- chronologicalFrontier: **2012-06-18**
- frontierLatestExactDateMachine: **鉄のラインバレル**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-06-18__NEXT_SAME_DAY_AUDIT_THEN_2012-06-19_TO_2012-06-25**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「それいけ！こすみっくヒーローズ」を確認して開始。
- INDEXは旧地点19件のままなのでREADME規定どおりLATEST_HANDOFFと実レコードを正本化。開始時は recordCount 665 / frontier 2012-06-11。
- 2012-06-12～06-17境界を検索したが、今回追加すべき具体日付き未登録5号機を確定できなかったため次候補へ前進。
- 「鉄のラインバレル」はrepo未登録を確認して666件目として追加。
- 導入日はK-Navi=2012-06-18、パチビー=2012-06-25でCONFLICT。平均せず双方保持し、時系列キーはK-Naviの具体的ホール導入開始日2012-06-18を採用。

## 今回の本線追加 — 鉄のラインバレル

### 性能コア

- manufacturer: **スパイキー**
- releaseDate: **2012-06-18**（パチビー2012-06-25とCONFLICT）
- generation: **5号機**
- systemType: **ボーナス+ART / CZ経由セットストック&ゲーム数上乗せART**
- 機械割: **97.1 / 98.8 / 101.0 / 104.7 / 109.2 / 113.6%**（詳細後年整理値。別回顧は丸め値）
- 鉄BONUS合成: **1/744.7 / 744.7 / 744.7 / 744.7 / 689.9 / 662.0**
- 鉄RUSH初当たり: **1/306.7 / 279.8 / 287.6 / 250.1 / 252.5 / 206.7**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- 赤7鉄BONUS: **約204枚**
- 白7鉄BONUS: **約104枚**
- ART「鉄RUSH」: **1セット40G+α / 純増約+1.9枚/G**
- K-Naviは**ボーナス込み約+2.1枚/G**表記のため定義差としてCONFLICT NOTE。
- 通常天井: **ボーナス+ART間499G or 999GでART3セット以上**。K-Navi当時記事は**3～15セット**と説明。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

### resetBehavior品質メモ

- 「鉄のラインバレル / パチスロ鉄のラインバレル / スパイキー」に「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 499 / 999 / モード / 状態 / ガックン / 50枚」を組み替えて再探索。
- K-Navi、P-WORLD、パチビー、パチマガスロマガ断片、旧攻略ページ、後年回顧/整理資料を横断。
- 通常天井の499/999G仕様とボーナス/ART当選時の天井リセットは確認できるが、**設定変更時のCLEAR/RETAINは別契約**なので推測転記していない。
- 据え置き、単純電源OFF→ON、設定変更時モード/状態、ガックン等の変更判別は十分な再探索後も本機固有の直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。

## CONFLICT / 品質メモ

- releaseDate: K-Navi **2012-06-18** / パチビー **2012-06-25**。平均せず保持。
- ART純増: P-WORLD・パチビー・パチ7回顧 **約+1.9枚/G** / K-Navi **ボーナス込み約+2.1枚/G**。定義差。
- 機械割: 詳細整理系列 **97.1/98.8/101.0/104.7/109.2/113.6%** / 別回顧一覧 **97.1/98.8/101.0/104/109/113%**。丸め差として保持。

## 次回再開地点

1. **recordCount 666 / chronologicalFrontier 2012-06-18**から開始。
2. **2012-06-18同日群を最終監査**し、具体日付き未登録5号機があれば先に処理。
3. 同日群を閉じたら **2012-06-19～06-24境界監査**へ進む。
4. 既知候補 **「セブンバー30」** は2012-06-25候補。06/25同日群の他機種を監査してから次レコード化する。
5. 「鉄のラインバレル」のパチビー2012-06-25表記は既存レコードにCONFLICT保存済みなので、06/25到達時に重複登録しない。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi: `https://p-kn.com/slot/1630/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6715`
- パチビー: `https://www.pachibee.jp/machines/reach/212040015`
- パチビー仕様解説: `https://www.pachibee.jp/machines/lecture/212040015`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/05/i.php`
- 後年整理データ: `https://ameblo.jp/thundervsp5/entry-12882129131.html`
- パチ7回顧: `https://pachiseven.jp/articles/detail/15609`

## GitHub commits

- 鉄のラインバレル machine record: `cccb3689c4fb860f0f8850a1cebcea8fc14ef144`
