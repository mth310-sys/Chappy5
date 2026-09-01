# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **316 `海遊記`（ベルコ / 2008-11 / 型式カイユウキY）**。
- 今回 **317 `モンキーモンキー`（ヤーマ / 型式モンキーモンキー3 / 2008-11-24納品開始）** を追加。
- handoffで未解決だったベルコ/ヤーマ表記を監査。ベルコ公式が `yama_monkeymonkey` の製品ページを公開し©yamaと明記、P-WORLDは表示名「モンキーモンキー」の型式名を「モンキーモンキー3」と記載、当時販売実務資料は「モンキーモンキー3＠ヤーマ」「ベルコとの業務提携記念特別販売キャンペーン第3弾」と記録するため、**ベルコ版/ヤーマ版の別機ではなく同一機種**と確定し1レコードのみ登録。
- 性能コア + v0.7 `resetBehavior` を同時収集。機械割は回顧DB単一系列、BIG規定払い出し・ART名称/公式最大突入率を保存。設定別初当たり、ベース、ART純増等は検索語・資料系統変更後も直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## 317. モンキーモンキー

- record: `docs/real_machine_db/machines/2008-11-24_monkey-monkey.md`
- manufacturer: ヤーマ
- distributionPartner: ベルコ
- modelNumber: `モンキーモンキー3`
- releaseDate: **2008-11-24（納品開始 / 当時販売実務系資料。メーカー公式は2008年11月登場）**。
- generation: 5号機
- systemType: ボーナス + ART
- settings: **1 / 2 / 3 / 4**（5号機クロニクル掲載体系。別系統で設定構成の直接照合待ち）
- 機械割: **96.5 / 99.5 / 104.0 / 108.0%**（5号機クロニクル。単一回顧DB値のため `RETROSPECTIVE_DATABASE_SINGLE`）。
- BIG: **465枚を超える払い出しで終了**（P-WORLD）。実獲得枚数は未確定。
- ART: **暴走モード**。ベルコ公式は「暴走モード突入率最大70%以上」と表記。設定別ART初当たり率とは解釈せず、公式のART突入率上限表現としてのみ保存。
- 設定別BIG/主要初当たり: `UNVERIFIED_AFTER_RESEARCH`。
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`。
- ART純増/G・基本G数: `UNVERIFIED_AFTER_RESEARCH`。
- `coreStatus: PARTIAL`。

### resetBehavior（317）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。機種名/型式名/ヤーマ/ベルコと「設定変更」「リセット」「朝一」「攻め時」「ヤメ時」「暴走モード」「ART」を組み替え、メーカー公式、P-WORLD、パチマガスロマガ旧解析、5号機クロニクル、当時販売資料、回顧資料を横断。パチマガ旧ページに **「攻め時・ヤメ時・設定変更時」** の解析項目が存在することは確認したが、現存検索インデックスから本文を回収できず、本機固有挙動は確定しない。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH`。ART状態/残G等の据え置き引継ぎを直接確定できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみでのART/内部状態処理を直接確定できず。
- `gameCounterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。通常ゲーム数到達型天井を確認できず。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。リセット専用短縮天井を確認できず。
- `modeAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。設定変更時の内部モード再抽選/引継ぎ、朝一専用モードを確定できず。
- `stateAfterReset`: `UNVERIFIED_AFTER_RESEARCH`。ART等の内部状態処理を確定できず。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示等の変更判別を回収できず。
- `numericResetData`: リセット固有の短縮天井・モード振り分け・朝一当選率・恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 317主要出典

取得日: 2026-09-02

- https://www.s-bellco.co.jp/products/slot/yama_monkeymonkey/ — ベルコ公式。2008年11月登場、5号機ART、暴走モード、最大70%以上、©yama。
- https://www.p-world.co.jp/machine/database/5344 — P-WORLD。表示名モンキーモンキー、型式名モンキーモンキー3、BIG 465枚超払い出し終了。
- https://ameblo.jp/swv0523/entry-10137975605.html — 当時遊技機販売・ホール実務系資料。2008-11-24納品開始、ヤーマ、ベルコ業務提携キャンペーン第3弾。
- https://5goki.com/yama — 5号機クロニクル。2008年11月、設定1〜4機械割96.5 / 99.5 / 104.0 / 108.0%。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/12/yama_slot_12.php — パチマガスロマガ旧攻略ページ。ボーナス確率/PAYOUT/ART/「攻め時・ヤメ時・設定変更時」項目の存在を確認。本文未回収のため具体値・変更挙動には不使用。

## 境界監査・重複防止

- **既存317件の再追加禁止。**
- `モンキーモンキー` と型式 `モンキーモンキー3` は同一機種。ベルコ公式掲載はヤーマブランド/業務提携流通であり、ベルコ別機として追加しない。
- `海遊記` は2000年4号機版と2008年5号機版を混同しない。316は2008年5号機 `カイユウキY`。
- `ぱちスロSTゴジラ` / `ぱちスロST行け!稲中卓球部` は2008-12-08候補、`HAIBいちろう` は2008-12-15候補として11月列へ混入させない。
- 11月境界候補の `ハネスロナイツ` / `バックトゥザフューチャーデラックス` は今回の一般検索では具体導入日を確定できていない。次回はメーカー名・型式名・当時業界記事・メーカー一覧・P-WORLD・旧攻略DBへ検索系統を広げて最終判定する。

## 次回再開地点

1. **LATEST_HANDOFF基準317件地点。まず `ハネスロナイツ` / `バックトゥザフューチャーデラックス` の正式表記・メーカー・型式・2008年11月の実導入/納品日を監査する。**
2. 11月中の未処理実導入機が確定した場合、最古のものから性能コア + v0.7 resetBehaviorを収集して318件目へ進む。
3. 同候補が11月外・既収録・実導入根拠不足なら、2008年11月残群をメーカー別一覧/当時業界記事で閉じ、2008年12月最古未処理機へ進む。
4. resetBehavior遡及QAは別QAリレーで継続し、新規収集の進行を止めない。
