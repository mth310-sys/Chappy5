# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **650**
- latestMachineAdded: **一騎当千3 Valiant Venus**（タイヨー）
- latestRecord: `docs/real_machine_db/machines/2012-04-16_ikkitousen3-valiant-venus.md`
- chronologicalFrontier: **2012-04-16**
- frontierLatestExactDateMachine: **一騎当千3 Valiant Venus**
- schema: **resetBehavior v0.7**
- status: **2012-04-16_GROUP_OPEN__CONTINUE_SAME_DAY_AUDIT**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード（クイーンズブレイド 流浪の戦士）を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時はrecordCount 649 / frontier 2012-04-16 / パチスロ クイーンズブレイド 流浪の戦士。
- 直前handoff指定の2012-04-16同日群を継続監査。
- 最優先候補「一騎当千3 Valiant Venus」をrepo code searchで未登録確認し、650件目として追加。
- 2012-04-16同日群には少なくとも「パチスロ マクロスフロンティア はじまりの歌、銀河に響け！」が未処理候補として残るため、同日群は閉じない。

## 今回の本線追加 — 一騎当千3 Valiant Venus

### 導入日・型式

- 時系列キー: **2012-04-16**。
- K-Navi・当時系新機種一覧で2012-04-16を照合。A-SLOTは2012年4月導入開始として月単位整合。
- manufacturer: **タイヨー**。
- formalModelName: **一騎当千3**。
- approvalNumber: **1S1217**（PachiNavi整理値。単独資料のため過信せずレコード内で出典明示）。

### 性能コア

- systemType: **5号機 ボーナス+ART / セットストック式ART**。
- 機械割: **96.6 / 98.0 / 99.9 / 103.0 / 108.7 / 112.9%**。
- BIG: **1/376.6 / 372.4 / 358.1 / 352.3 / 336.1 / 319.7**。
- REG: **1/381.0 / 374.5 / 366.1 / 354.2 / 343.1 / 319.7**。
- ボーナス合算: **1/189.4 / 186.7 / 181.0 / 176.6 / 169.8 / 159.8**。
- ART初当り: **1/559.6 / 493.1 / 503.3 / 439.0 / 434.7 / 363.8**。
- ボーナス+ART合算: **1/141.5 / 135.4 / 133.1 / 126.0 / 122.1 / 111.0**。
- ART「関羽無双」「子龍七連撃」: **1セット7G / 約+1.5枚/G**。
- BIG最大 **208枚**、REG **50枚**。
- ART初当り時はストック5個以上。
- 通常内部状態は通常・高確・超高確。
- ゲーム数天井: **ボーナス間1000G消化以降のボーナス成立後、必ずART突入**。1000G到達即発動型ではない。
- 50枚ベースは「50枚/1000円/ベース/コイン持ち」を表記揺れ・型式名・メーカー名と組み替えて再探索したが比較可能な直接数値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior v0.7

- K-Navi本機ページに**「設定変更後の挙動」専用解析項目が存在**することを確認。
- ただし現存公開本文から、設定変更時の天井ゲーム数クリア/引継ぎ、内部状態再抽選、短縮天井等の具体処理を直接回収できなかった。
- 一般的な5号機ART機の仕様、別機種「一騎当千XX」、後年スマスロ版の朝一仕様は流用しない。
- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: 通常天井条件自体は確認済みだが、設定変更時の1000Gカウンタ処理は **UNVERIFIED_AFTER_RESEARCH**。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `modeAfterReset` / `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: ガックンに関するユーザー投稿は解析根拠でないため不採用。機種固有の確定判別要素は **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 時系列監査 / 次回再開地点

1. **recordCount 650 / chronologicalFrontier 2012-04-16**から開始。
2. **2012-04-16同日群を継続監査**する。
3. 最優先候補: **パチスロ マクロスフロンティア はじまりの歌、銀河に響け！**（SANKYO）。K-Navi・当時系新機種一覧で2012-04-16導入を確認済み。必ずrepo重複確認後、未登録なら651件目候補。
4. **ねぇ～ねぇ～島娘**はDK-SISで4/16導入開始扱い、前handoff確認のK-Naviでは4/23表記があるため、到達時は具体日CONFLICT/日付定義差を再確認し、最古具体日で漏れ防止しつつ両根拠を保持する。
5. 同日群候補として、当時系新機種一覧に **ToHeart2 バカンスバージョン**の4/16表記があるが、本DBにはToHeart2本体レコードが2012-02-20で既登録。別型式/別スペック実在機か、単なる再販・導入日差かをrepo既存レコードと型式資料で確認してから新規扱いを判断する。重複作成しない。
6. 04/16群を閉じるまでは次日へ飛ばさない。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックンを組み替えて再探索し、競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi 一騎当千3 Valiant Venus: `https://p-kn.com/slot/1603/`
- PachiNavi 一騎当千3 Valiant Venus: `https://pachinavi.net/machines/ikkitousen-3-valiant-venus/`
- P-WORLD 一騎当千3 Valiant Venus: `https://www.p-world.co.jp/machine/database/6660`
- 5号機クロニクル タイヨー: `https://5goki.com/taiyo`
- 遊技通信社提供プレス発表記事: `https://www.55hadama.com/new/2012-02-27-133840.html`
- 当時系新機種一覧: `https://macerate.seesaa.net/article/263152916.html`
- A-SLOT 一騎当千3 Valiant Venus: `https://www.a-slot.com/SHOP/taiyo12.html`
- K-Navi マクロスフロンティア: `https://p-kn.com/slot/1610/`

## GitHub commits

- 一騎当千3 Valiant Venus machine record: `3c93340518e52d092ac44c234c99544bdff47397`
