# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前地点は200件目 `超お父さん2`。
- 次候補 `哲也～雀聖と呼ばれた男～` をmain内検索し、別名既存レコードがないことを確認。
- **201件目 `哲也～雀聖と呼ばれた男～` を追加済み。**

## 201. 哲也～雀聖と呼ばれた男～

- new record: `docs/real_machine_db/machines/2007-11-20_tetsuya-jansei-to-yobareta-otoko.md`
- commit: `28475fb37e5a5372c2be75db6c881712c4915094`
- manufacturer: アリストクラートテクノロジーズ
- releaseDate: 2007-11-20
- generation: 5号機
- systemType: ボーナス + ART / CZ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・系統

- 型式名 `哲也`。
- K-Navi当時記事: 2007-10-09から内覧会、ホールデビュー2007年11月中旬予定。
- パチビー当時導入カレンダー: 2007-11-20導入。
- P-WORLD / 5号機クロニクル: 2007年11月導入。
- 本DBは具体的なホール導入日を持つパチビーを基準に `2007-11-20` を採用。

### 性能コア

- BIG合成: 設定1 `1/378.8` → 設定6 `1/273.1`。
- REG合成: 設定1 `1/648.9` → 設定6 `1/448.9`。
- ボーナス合成: 設定1 `1/239.2` → 設定6 `1/169.8`。
- BIG約240枚、REG約104枚。
- ART `玄人タイム`: 約+1.0枚/G、1セット30G / 100G / 1000G。
- ボーナス後・RT後・通常500G消化でCZ `天運チャンス`。通常500Gは救済的CZ到達周期として確認。
- 50枚ベースは表記揺れ・型式・メーカー名・50枚/1000円/千円/ベース/コイン持ち等で再探索したが確定できず `UNVERIFIED`。

### 機械割 CONFLICT

主要3系統（P-WORLD / 5号機クロニクル / 当時系5号機まとめwiki）:
- `98.6 / 99.7 / 102.0 / 104.3 / 105.7 / 109.3%`

別後年スペック整理資料:
- `99.2 / 100.2 / 102.8 / 103.9 / 106.0 / 109.2%`

単純丸めではないため平均せず `CONFLICT`。

### v0.7 resetBehavior

`哲也 / 哲也～雀聖と呼ばれた男～ / アリストクラート / 型式 哲也 / 玄人タイム / 天運チャンス / 500G` と、`設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 宵越し / 天井 / モード / 状態 / ガックン` を組み替え、当時業界記事、P-WORLD、K-Navi、5号機クロニクル、当時系wiki、回顧/スペック資料まで横断。

- settingChangeBehavior: 設定変更時の500G周期、CZ/ART/内部RT、ARTストック処理 `UNVERIFIED`。
- carryOverBehavior: 据え置き時の500G周期ゲーム数、CZ/ART/内部RT、ARTストック引継ぎ `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ONのみ時の500G周期、CZ/ART/内部RT、ARTストック処理 `UNVERIFIED`。
- gameCounterReset: 通常500Gで天運チャンスへ移行する仕様は `CONFIRMED`。変更/据え置き/電断時の500Gカウンタ処理は `UNVERIFIED`。
- ceilingAfterReset: 設定変更専用短縮周期/短縮天井の具体値 `UNVERIFIED`。通常救済周期500G。
- modeAfterReset: 朝一専用/設定変更専用モード振り分け `UNVERIFIED`。
- stateAfterReset: 天運チャンス/玄人タイム/内部RT/ARTストックの変更・据え置き・電断時処理 `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits: 設定変更/朝一専用の確定恩恵・公開数値 `NONE_CONFIRMED`。
- resetPenalties: 具体的な朝一/変更時不利要素 `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/表示/ゲーム数挙動等の変更判別 `UNVERIFIED`。
- numericResetData: 通常500Gで天運チャンスのみ確認。設定変更後専用G数、朝一当選率/ART期待度、変更時モード振り分け、恩恵発生率は `UNVERIFIED`。

主要出典:
- パチビー: https://www.pachibee.jp/machines/schedule/2007-11
- K-Navi当時業界記事: https://p-kn.com/topics/news/375/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/4948
- 5号機クロニクル: https://5goki.com/aristocrat
- 当時系5号機まとめwiki: https://w.atwiki.jp/5gouki/pages/65.html
- 後年スペック整理（CONFLICT側）: https://pachinko.hatenablog.jp/entry/2007/11/tetsuya
- K-Navi機種ページ: https://p-kn.com/slot/659/

## 直前の既存群

- 198件目 `華一番-30`
- 199件目 `スーパービンゴV`
- 200件目 `超お父さん2`
- 201件目 `哲也～雀聖と呼ばれた男～`

## resetBehavior 遡及QA

### 電撃フランケン（2006-07-24）

- 既存性能コア判定を崩さずv0.7 `resetBehavior` 追加済み。
- resetBehaviorQA: `PARTIAL`
- QA commit: `52efe06e28ac69d71c33207e4f0c74ddc326e892`
- BIG後RT `GHOST GAME` 150G、通常時ゲーム数天井非搭載を確認済み。
- 設定変更/据え置き/電断時のRT状態と本機固有変更判別は `UNVERIFIED`。

## 次回再開地点

1. **LATEST_HANDOFF基準201件地点から継続。**
2. 次の確定時系列群は2007-11-26。`赤ドン` と `ファイアーヒーローS` をmain内検索し、既存/別名登録がないことを確認してから日付順に処理する。
3. ただし2007年11月の月次監査候補 `パチってスロット / パチスロシティーハンター / ビーチクラブ` は具体導入日を再確認し、11/20より後かつ11/26より前、または11/20以前と判明した場合は漏れ防止のため時系列位置へ遡及差し込みする。
4. `哲也～雀聖と呼ばれた男～` は50枚ベース、機械割CONFLICTの原典差、設定変更/据え置き/電源OFF→ON時の500G周期/CZ/ART/内部RT/ARTストック、本機固有変更判別が追加QA対象。
5. `超お父さん2` は50枚ベース、設定変更/据え置き/電源OFF→ON時の600G周期/CZ/RT状態、K-Navi「朝一はお得!?」本文のアーカイブ発掘、本機固有変更判別が追加QA対象。
6. `スーパービンゴV` は50枚ベース、設定変更/据え置き/電源OFF→ON時の900G天井カウンタ/CZ/ART引継ぎ、本機固有変更判別が追加QA対象。
7. resetBehavior遡及QAは `電撃フランケン` より後の既存レコードを時系列走査し、`resetBehavior`節未収集の最古機から継続する。
8. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
9. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
