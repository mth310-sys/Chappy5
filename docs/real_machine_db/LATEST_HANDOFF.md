# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **317 `モンキーモンキー`（ヤーマ / 型式モンキーモンキー3 / 2008-11-24納品開始）**。
- handoff指定の11月残群 `ハネスロナイツ` / `バックトゥザフューチャーデラックス` を監査し、両機とも複数DBで **2008年11月導入**を確認。具体的な全国導入/納品日の強い根拠は今回回収できなかったため、日付順を推測しない。
- 今回 **318 `ハネスロナイツ`（オーイズミ / 型式ハネスロナイツ / 検定8S0770 / 2008-11月精度）** を追加。
- 性能コア + v0.7 `resetBehavior` を同時収集。P-WORLDと5号機クロニクルで設定1〜6機械割が全一致。設定別4種ボーナス確率、合算、60/120/180/240枚の基本獲得性能を保存。
- 50枚ベースは掲示板実戦値を解析値として流用せず、十分な再探索後 `UNVERIFIED_AFTER_RESEARCH`。

## 318. ハネスロナイツ

- record: `docs/real_machine_db/machines/2008-11_hanesuro-knights.md`
- manufacturer: オーイズミ
- modelNumber: `ハネスロナイツ`
- inspectionNumber: `8S0770`
- releaseDate: **2008-11（月精度 / P-WORLD・5号機クロニクル一致）**。
- generation: 5号機
- systemType: ノーマル / ボーナス主体
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 1倍BONUS: **1/257 / 1/286.18 / 1/257 / 1/286.18 / 1/257 / 1/257**。
- 2倍BONUS: **1/327.68 / 1/286.18 / 1/307.68 / 1/267.49 / 1/282.49 / 1/235.74**。
- 3倍BONUS: **1/655.36 / 1/455.11 / 1/618.26 / 1/399.61 / 1/512 / 1/341.33**。
- 4倍BONUS: **1/504.12 / 1/655.36 / 1/468.11 / 1/590.41 / 1/385.51 / 1/468.11**。
- ボーナス合算: **1/95.67 / 1/93.36 / 1/91.79 / 1/87.50 / 1/83.49 / 1/75.76**。
- 機械割: **96.6 / 98.3 / 100.0 / 103.4 / 108.0 / 114.8%**（P-WORLD・5号機クロニクル一致）。
- 基本獲得: **60 / 120 / 180 / 240枚**。規定払い出し終了は順に74枚超 / 149枚超 / 224枚超 / 253枚超。
- 50枚ベース: `UNVERIFIED_AFTER_RESEARCH`。
- `coreStatus: PARTIAL`。

### resetBehavior（318）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH`。機種名/型式/メーカーと「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「初期出目」「攻め時」「ヤメ時」を組み替え、P-WORLD、K-Navi、5号機クロニクル、販売/実機資料、当時・回顧検索を横断したが本機固有処理を直接確定できず。
- `carryOverBehavior`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。ボーナスのみのノーマルタイプで、RT/ART/AT、通常ゲーム数天井、周期CZ、公開持続モード等を確認できず。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ON時の初期出目/表示を含む本機固有処理は未確定。
- `gameCounterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。ゲーム数天井・救済RT・周期CZなしを確認範囲で保持。
- `ceilingAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `modeAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。公開された通常時内部モード/朝一専用モードなし。
- `stateAfterReset`: `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン/初期出目/表示等の本機固有変更判別を回収できず。
- `numericResetData`: リセット固有の短縮天井・モード振り分け・朝一当選率・恩恵発生率は `NONE_CONFIRMED_AFTER_RESEARCH` / `NOT_APPLICABLE_OR_NONE_CONFIRMED`。

## 318主要出典

取得日: 2026-09-02

- https://www.p-world.co.jp/machine/database/5354 — P-WORLD。オーイズミ、5号機ノーマル、型式/検定番号、2008年11月、設定別4種ボーナス・合算・機械割、60/120/180/240枚、規定払い出し終了条件。
- https://5goki.com/oizumi — 5号機クロニクル。2008年11月、機械割96.6 / 98.3 / 100.0 / 103.4 / 108.0 / 114.8%。P-WORLDと全設定一致。
- https://p-kn.com/slot/881/direct/ — K-Navi。オーイズミ「ハネスロナイツ」プレス発表会/新機種ニュースの存在、シリーズ第3弾・4倍ボーナスの補助確認。
- https://store.shopping.yahoo.co.jp/hollup/6360.html — 当時販促パンフレット/カタログ資料の現存確認。数値根拠には不使用。

## 境界監査・重複防止

- **既存318件の再追加禁止。**
- `ハネスロナイツ` はP-WORLD・5号機クロニクルとも2008年11月。ただし具体導入日は未確定なので `2008-11` の月精度を維持する。
- `バックトゥザフューチャーデラックス`（ロデオ）はP-WORLD/5号機クロニクルで2008年11月候補。P-WORLDではBIG 1/358.1〜1/291.3、REG 1/574.9〜1/474.9、合算1/220.7〜1/180.5、5号機クロニクルでは機械割97.3〜107.8%まで候補値を取得済み。次回正式型式・導入境界・性能コア・resetBehaviorを詰める。
- `ぱちスロSTゴジラ` / `ぱちスロST行け!稲中卓球部` は2008-12-08候補、`HAIBいちろう` は2008-12-15候補として11月列へ混入させない。

## 次回再開地点

1. **LATEST_HANDOFF基準318件地点。`バックトゥザフューチャーデラックス`（ロデオ）を最優先。正式型式、2008年11月の具体導入/納品日を当時業界記事・メーカー系資料・P-WORLD・旧解析DBで再確認する。**
2. 性能コアは既にP-WORLDの設定別BIG/REG/合算、5号機クロニクルの機械割系列を候補確保済み。50枚ベース、ボーナス実獲得、RT/ART有無を追加探索する。
3. v0.7 `resetBehavior` は設定変更/据え置き/電源OFF→ON、ゲーム数・天井、モード・状態、朝一恩恵/不利、変更判別、公開朝一数値を表記・型式・メーカー違いで再探索する。
4. 同機処理後、2008年11月メーカー別一覧をもう一度閉じてから2008年12月最古未処理機へ進む。
