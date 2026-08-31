# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前地点は199件目 `スーパービンゴV`。
- 2007-11-19同日群の次候補 `超お父さん2` をmain内検索し、別名既存レコードがないことを確認。
- **200件目 `超お父さん2` を追加済み。**

## 200. 超お父さん2

- new record: `docs/real_machine_db/machines/2007-11-19_chou-otousan-2.md`
- commit: `1dc8877470490d7cb1a2896cb737cd0eab37953d`
- manufacturer: SNKプレイモア
- releaseDate: 2007-11-19
- generation: 5号機
- systemType: ボーナス + RT / CZ
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入・系統

- 型式名 `スーパーオトウサン2X`。
- 当時グリーンべると: 2007-10-18発表展示会、2007-11-18納品開始。
- パチビー: 2007-11-19ホール導入。
- 5号機クロニクル: 2007年11月導入。
- releaseDateはホール導入日基準で2007-11-19を採用し、納品開始日との差は定義差として保持。

### 性能コア

- ボーナス合成: 設定1 `1/199.8` → 設定6 `1/159.8`。
- REG: 設定1 `1/468.1` → 設定6 `1/374.5`。
- 機械割: `97.6 / 99.9 / 102.7 / 106.0 / 107.1 / 110.1%`。
- BIG: 約270枚固定、REG: 平均約110枚。
- RT `バトルチャンス`: 30G、約+0.3枚/G、CZを介して約67%ループ。
- 全ボーナス後とRT終了後にCZ。赤7/青7BIG後は最初の1Gのみ「超チャンスゾーン」。
- 通常ゲーム600G消化で内部的にCZへ突入する救済周期を確認。
- 50枚ベースは `50枚 / 1000円 / 千円 / ベース / コイン持ち / 回転数`、型式名・メーカー名を組み替え、業界記事、P-WORLD、K-Navi、5号機クロニクル、当時系wiki、回顧資料まで再探索したが確定できず `UNVERIFIED`。
- 色別BIG確率は5号機クロニクルが各色同率、P-WORLDがごく小さい色差を掲載。主要合成値は一致するため、色別は定義/精度差として `CONFLICT` を保持し、物差し用にはボーナス合成値を採用。

### v0.7 resetBehavior

`超お父さん2 / スーパーオトウサン2X / SNKプレイモア / バトルチャンス / チャンスゾーン / 600G` と、`設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 宵越し / 天井 / 周期 / モード / 状態 / ガックン` を組み替えて再探索。

- settingChangeBehavior: 設定変更時の600G周期、CZ/低確RT/30G RT状態処理 `UNVERIFIED`。
- carryOverBehavior: 据え置き時の600G周期ゲーム数、CZ/RT状態引継ぎ `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ONのみ時の600G周期、CZ/RT状態 `UNVERIFIED`。
- gameCounterReset: 通常ゲーム600GでCZへ入る救済周期は `CONFIRMED`。変更/据え置き/電断時のカウンタ処理は `UNVERIFIED`。
- ceilingAfterReset: 設定変更専用の短縮周期/短縮天井の具体値 `UNVERIFIED`。通常救済周期600G。
- modeAfterReset: 朝一専用/設定変更専用モード振り分け `UNVERIFIED`。
- stateAfterReset: CZ/低確RT/バトルチャンスの変更/据え置き/電断処理 `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits: K-Navi現存ページに「朝一はお得!?」という専用項目の痕跡あり。ただしリンク先本文が現在取得不能で内容・条件・数値を確定できないため `UNVERIFIED`。見出しから恩恵を推測しない。
- resetPenalties: 具体的な朝一/変更時不利要素は `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/表示等の変更判別 `UNVERIFIED`。
- numericResetData: 通常救済周期600Gのみ確認。設定変更後専用G数、朝一当選率/RT期待度、変更時モード振り分け、恩恵発生率は `UNVERIFIED`。

主要出典:
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/2438/greenbelt
- パチビー: https://www.pachibee.jp/machines/schedule/2007-11
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/4947
- 5号機クロニクル: https://5goki.com/snkplaymore
- 当時系5号機まとめwiki: https://w.atwiki.jp/5gouki/pages/86.html
- K-Navi: https://p-kn.com/slot/660/
- パチマガスロマガFREE回顧: https://pachimaga.com/free/special/75bc9eed9a9585b9949ca883507a7a8de58b96ed.php

## 直前の既存群

- 197件目 `華一番`（25φ）
- 198件目 `華一番-30`（30φ）
- 199件目 `スーパービンゴV`
- 200件目 `超お父さん2`

## resetBehavior 遡及QA

### 電撃フランケン（2006-07-24）

- 既存性能コア判定を崩さずv0.7 `resetBehavior` 追加済み。
- resetBehaviorQA: `PARTIAL`
- QA commit: `52efe06e28ac69d71c33207e4f0c74ddc326e892`
- BIG後RT `GHOST GAME` 150G、通常時ゲーム数天井非搭載を確認済み。
- 設定変更/据え置き/電断時のRT状態と本機固有変更判別は `UNVERIFIED`。

## 次回再開地点

1. **LATEST_HANDOFF基準200件地点から継続。**
2. 次の時系列候補は2007-11-20 `哲也～雀聖と呼ばれた男～`。mainに別命名既存レコードがないか検索/ディレクトリで再確認してから登録する。
3. その後は2007-11-26 `赤ドン` / `ファイアーヒーローS` を日付順に処理する。
4. 2007年11月の月次監査候補 `パチってスロット / パチスロシティーハンター / ビーチクラブ` は具体導入日・既存有無を再確認し、11/20・11/26群より古ければ遡及差し込みする。
5. `超お父さん2` は50枚ベース、設定変更/据え置き/電源OFF→ON時の600G周期/CZ/RT状態、K-Navi「朝一はお得!?」本文のアーカイブ発掘、本機固有変更判別が追加QA対象。
6. `スーパービンゴV` は50枚ベース、設定変更/据え置き/電源OFF→ON時の900G天井カウンタ/CZ/ART引継ぎ、本機固有変更判別が追加QA対象。
7. resetBehavior遡及QAは `電撃フランケン` より後の既存レコードを時系列走査し、`resetBehavior`節未収集の最古機から継続する。
8. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
9. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は根拠なしに流用しない。

取得日: 2026-09-01
