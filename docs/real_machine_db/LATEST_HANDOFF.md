# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前は **286 `犬キング`（コルモ / 型式イヌキングX / 2008-08-04）**。
- 今回新規で **287 `メガラニカ`（ウィンネットテクノロジー / ラスター / 2008-08）** を追加した。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。

## 287. メガラニカ

- record: `docs/real_machine_db/machines/2008-08_megalanica.md`
- manufacturer: ウィンネットテクノロジー / ラスター
- modelName: `メガラニカ`
- generation: 5号機
- systemType: ノーマル / BIG+REG+3種MB（MEGAゲーム）
- releaseDateは複数資料で2008年8月リリースまで確認。`2008-08-04`、`2008-08-11`、納品/発売/導入等へ検索語を変えたが具体日を直接裏付ける高信頼資料を確定できなかったため、推測せず月精度 `2008-08` で保存。
- BIGは設定1〜6で 1/297.9, 1/295.2, 1/292.6, 1/287.4, 1/277.7, 1/264.3。
- REGは全設定1/3276.8。
- MEGAゲーム（3種MB合算）は1/468.1〜1/364.1。
- ボーナス合算は1/172.5〜1/146.3。
- 50枚ベースは設定1〜6で33.23 / 33.64 / 34.08 / 34.55 / 35.31 / 36.45G。
- BIG約336枚、REG約100枚。MEGAゲームは3種類で約200枚 / 150枚 / 100枚。
- RT/ART/AT等の付加機能なし。
- パチマガスロマガPAYOUTは97.92/99.19/100.99/103.14/105.80/109.84%。別5号機整理資料は98.1/99.1/100.0/103.1/105.5/109.5%。平均せず `CONFLICT_PAYOUT_RATE`。
- coreStatus: `COMPLETE_CORE_WITH_PAYOUT_CONFLICT`

### resetBehavior（287）

- `settingChangeBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 設定変更時の本機固有挙動を直接説明する本文を確定できず。
- `carryOverBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 据え置き時の本機固有挙動を確定できず。通常ゲーム数天井やRT/ART/AT持続状態は確認されていない。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH` — 電源OFF→ONのみの本機固有挙動を確定できず。
- `gameCounterReset`: `NOT_APPLICABLE_FOR_CONFIRMED_CEILING` — 通常ゲーム数天井は確認されず。
- `ceilingAfterReset`: `NOT_APPLICABLE` — 通常ゲーム数天井/リセット短縮天井は確認されず。
- `modeAfterReset`: `NONE_CONFIRMED_AFTER_RESEARCH` — 通常時モード/朝一専用モードは確認できず。
- `stateAfterReset`: `NONE_CONFIRMED_FOR_PERSISTENT_RT_ART_AT_STATE` — RT/ART/AT等の持続状態なし。その他本機固有内部状態は公開資料で確認できず。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）
- `resetBenefits`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH` — ガックン、初期出目、液晶表示等による本機固有の変更判別を確定できず。
- `numericResetData`: 通常ゲーム数天井なし/未確認、リセット短縮天井非該当、朝一専用数値は確認できず。

## 今回の主要出典

取得日: 2026-09-01

- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/06/h.php
  - パチマガスロマガ。設定別BIG/REG/MB（MEGAゲーム）/合算、シミュレートPAYOUT。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/06/a.php
  - パチマガスロマガ。ノーマルタイプ、BIG/REG/3種MBの払い出し終了条件と純増目安。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/06/c.php
  - パチマガスロマガ。設定別1000円あたりゲーム数33.23〜36.45G。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/06/winnet_slot_06.php
  - 攻略トップ。攻め時・ヤメ時「特にナシ」の確認補助。
- https://pachinko.hatenablog.jp/entry/2008/08/megallanica
  - 2008年8月リリース、ノーマル、設定別主要確率の照合、別PAYOUT系列。
- https://slothistory.com/kousin_kako05.html
  - 当時業界アーカイブ。ウィンネットテクノロジー/ラスターの次機種、純Aタイプとの記録。
- https://q-and-a.hatenablog.com/entry/2016/10/05/134740
  - メガラニカ検定2008-06-19、後発メガラニカDX検定2008-08-18の別型式確認。DX混同防止。

## 重複防止・境界管理

- **既存287件の再追加禁止。**
- `メガラニカDX` は2008-08-18検定の後発別型式痕跡。`メガラニカ` と混同しない。
- `犬キング` は型式 `イヌキングX`。同名表記揺れとして二重登録しない。
- `爆音伝説サクラ` は2007年旧仕様と2008年発売版の数値を混在させない。
- `海人G-30` と25Φ `海人` は別レコード。
- `完熟チェリー` は2008年10月境界で再確認する。
- `スーパージャックポットK / P-30` は別型式痕跡の同一機/別機判定を後続QAで継続する。
- 情報提供端子板の対応機種化日だけを導入日として扱わない。

## resetBehavior 遡及QA

- 最終補完済み地点 `球児（2006-09）` を維持。
- 2006年ヤーマ `ジャックポット トロピカルバージョン` の実ファイル同定問題は未解消。2017年 `Ver.2` と混同しない。
- 新規収集本線を止めない。

## 次回再開地点

1. **LATEST_HANDOFF基準287件地点。時系列は2008年8月初旬まで進行。**
2. 次は2008年8月初旬群の未処理候補を具体日順に再監査し、`アカネ55`（NET）、`シオサイV-30`（パイオニア）等の導入日を当時業界記事/公式/旧DBで比較して、最古の未処理機から処理する。
3. `メガラニカ` は具体導入日が未確定のため、後続で一次/当時ホール導入記録が見つかった場合のみ月精度から日精度へ更新する。現時点では推測禁止。
4. `メガラニカDX` は後発別型式として扱い、同一レコードへ統合しない。実際にホール導入された独立機か、仕様変更/検定だけかを後続境界監査で判定する。
5. v0.7 resetBehaviorではノーマル機を理由に設定変更挙動を決め打ちせず、設定変更/据え置き/電源OFF→ON/ゲーム数天井/モード・状態/朝一恩恵・不利/変更判別を機種名・型式・メーカー名で再探索する。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と検索項目を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
