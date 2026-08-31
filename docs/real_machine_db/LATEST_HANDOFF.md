# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前地点は203件目 `ファイアーヒーローS`。
- 2007年11月月精度候補を境界監査し、main内検索で `ビーチクラブ` の既存/別名レコードがないことを確認。
- **204件目 `ビーチクラブ` を追加済み。**

## 204. ビーチクラブ

- new record: `docs/real_machine_db/machines/2007-11_beach-club.md`
- commit: `9627d328356e5abca070f1ad3b1ed5cb24f6f1db`
- manufacturer: ビスティ
- generation: 5号機
- systemType: ボーナス + CZ + RT / 完全告知
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・系統 CONFLICT

- SANKYOオンライン博物館: 導入年月 `2007.11`、型式 `ビーチクラブS`。
- 当時HAZUSE: `2007年11月`。
- 5号機クロニクル: `2007/11`。
- 一方、当時の機種史資料「パチスロ業界初まとめ」は2007-09-25更新時点で `2007/9/上発売` と記録。
- 月差が大きいため、発売/ホール導入の定義差または資料競合として `CONFLICT`。日付を推測で一本化しない。

### 性能コア

解析セブン/HAZUSE系:
- BIG: `1/327.6 → 1/251.1`
- CB: `1/458.2 → 1/289.9`
- 合算: `1/191.0 → 1/134.5`
- BIG純増約307枚、CB純増約104枚。
- 全ボーナス後7Gチャンスタイム。
- 特殊リプレイ入賞で77G RT「ビーチチャンス」。
- RT純増は解析セブンで約 `+0.1枚/G`。

50枚ベースは `ビーチクラブ / ビーチクラブS / ビスティ / 50枚 / 1000円 / ベース / コイン持ち / 千円ゲーム数` を組み替え、公式・当時解析・旧DB・回顧資料を横断したが比較可能な直接値を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 機械割 CONFLICT

平均せず双方保持:
- 解析セブン / HAZUSE: `95.8 / 98.3 / 100.7 / 103.8 / 107.6 / 111.1%`
- 5号機クロニクル: `94.7 / 97.7 / 100.9 / 103.9 / 108.5 / 112.5%`

### v0.7 resetBehavior

- settingChangeBehavior: 設定変更時の7Gチャンスタイム/77G RT開始・状態再抽選は `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時CZ/RT残G・内部状態 `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 電源OFF→ON時CZ/RT残G・内部状態 `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常時ゲーム数天井は `NONE_CONFIRMED`。
- ceilingAfterReset: リセット短縮天井/変更後専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/変更時モード振り分け `NONE_CONFIRMED`。
- stateAfterReset: CZ/RT状態処理 `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: 公開された朝一固有恩恵・不利要素 `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/告知ランプ等の変更判別 `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 公開された設定変更専用数値は今回確認できず。

主要出典:
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/867/
- 解析セブン: https://crankyseven.com/sp/beachclub-pc.htm
- HAZUSE: https://hazuse.com/i/data/biichi/top.htm
- 5号機クロニクル: https://5goki.com/bisty
- パチスロ業界初まとめ: https://slothistory.com/kousin_kako04.html
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/12/a.php

## 直前の既存群

- 200件目 `超お父さん2`
- 201件目 `哲也～雀聖と呼ばれた男～`
- 202件目 `赤ドン`
- 203件目 `ファイアーヒーローS`
- 204件目 `ビーチクラブ`

## 境界監査メモ

- `パチスロシティーハンター` はグリーンべると2007-11-09記事で **納品12月6日開始予定** を確認済み。12月キューへ送る。
- `パチってスロット` は5号機クロニクル等で **2007/11**。具体導入日は未確定で未処理。
- `ビーチクラブ` は今回登録。公式2007.11と当時機種史2007/9上旬発売の競合を保持。
- 11月はメーカー別一覧・当時業界記事・導入カレンダー・旧DBで残候補を再監査してから閉じる。

## resetBehavior 遡及QA

### クランキーコンドルX（2006-08）

- 既存性能コア値・既存CONFLICTを維持したままv0.7 `resetBehavior` 追加済み。
- QA commit: `866b551249aab530513527a8dae09955e359ad9c`
- 次は2006年8月群の既存レコードを時系列走査し、resetBehavior節未収集の最古機から継続。

## 次回再開地点

1. **LATEST_HANDOFF基準204件地点から継続。**
2. 2007年11月残候補 `パチってスロット` の具体導入日・型式・性能コア・resetBehaviorを最優先で再探索する。
3. 同じ11月の未処理候補をメーカー別一覧・当時業界記事・導入カレンダー・旧DBで境界監査し、11月を閉じる。
4. `パチスロシティーハンター` は2007-12-06納品開始予定を確認済みなので12月キューへ送る。
5. `ビーチクラブ` 追加QAは50枚ベース、設定変更/据え置き/電断時CZ・RT状態、変更判別、発売/導入時期競合の解消を優先。
6. resetBehavior遡及QAは `クランキーコンドルX` の次の既存レコードを時系列走査し、2006年8月群（`じゃりン子チエ` / `ランブルローズ` / `逮捕しちゃうぞ` 等）の既補完有無をmainで確認してから処理。
7. 既存 `COMPLETE_CORE` は性能コア完了判定を不用意に崩さず、resetBehaviorQAを別管理する。
8. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
9. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
