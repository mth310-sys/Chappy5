# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは195件目 `南国姉妹-30` の次に `トリプルクラウンS2-30` を未登録候補としていたが、最新main再監査で `docs/real_machine_db/machines/2007-09-17_triple-crown-s2-30.md` が既に存在することを確認した。
- このため `トリプルクラウンS2-30` を重複追加・重複カウントせず、既存レコードとして扱って本線を前進した。
- 2007-11-05のパチビー一覧はパチンコのみで、次に日単位で確認できる未登録パチスロとして **2007-11-12 `NEO花物語`** を確認。
- **196件目として `NEO花物語` を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-11-12_neo-hana-monogatari.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `cb73516b2b0bf354570f5a0bb6aa482b0d293746`

## 既存レコード再監査 — トリプルクラウンS2-30

- 当時グリーンべると記事は **2007-09-17から納品** と明記。
- 後年DBには2007年10月導入表記もあり、発売/納品/導入の定義差を含むため平均せず `CONFLICT` として扱う。
- 機械割はパチマガスロマガのシミュレート値 **95.80〜109.50%** と、HAZUSE系 **95.5〜110.1%** が競合。平均せず既存レコード側のCONFLICT管理を維持する。
- 直前handoffの「main未登録」は古い認識だったため、今回の最新main再読で訂正した。

主要出典:
- グリーンべると: https://web-greenbelt.jp/00004271/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/01/seiryu_slot_01.php

## 196. NEO花物語

- manufacturer: オーイズミ / オーイズミNEO
- releaseDate: 2007-11-12
- generation: 5号機
- systemType: A+RT / 完全告知
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 導入時期

- 2007-10-10に発表展示会。
- パチビー2007年11月新機種導入日で **2007-11-12導入**を確認。
- 発表日とホール導入日を分離して保存した。

### 性能コア

- 青7BIG: 設定1 `1/1260.3` → 設定6 `1/1040.3`
- 赤7BIG: 設定1 `1/771.1` → 設定6 `1/601.3`
- REG: 設定1〜3 `1/474.9`、設定4〜6 `1/458.3`
- 合成: `1/238.3` → `1/208.1`
- 機械割: `97.2%` → `108.5%`
- P-WORLDの合成丸め値 `1/238 → 1/208` と整合するが、個別ボーナス確率と機械割の詳細設定別値は回顧資料1系統中心なので `PARTIAL_CROSSCHECK`。
- 50枚あたりゲーム数は資料系統・検索語を変えて再探索しても確定できず `UNVERIFIED`。

### RT / 払い出し

- 全ボーナス終了後にRT `NEO花タイム`。
- 青7BIG後111G、赤7BIG後77G、REG後33G。
- RT純増約 `+0.3枚/G` は当時業界記事と後年回顧で一致。
- RT中の特殊リプレイで150Gの `SUPER NEO花タイム` へ移行する仕様を確認。
- P-WORLDはPremium BIG/Bigを350枚超払い出し終了、REGを253枚超払い出し終了としている。

### v0.7 resetBehavior

`NEO花物語 / オーイズミNEO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / NEO花タイム / SUPER NEO花タイム / 天井 / ガックン` を組み替え、当時業界・旧DB・回顧資料を再探索。

- settingChangeBehavior: 設定変更時のRT残G/内部RT状態/成立済みボーナスは `UNVERIFIED`。
- carryOverBehavior: 据え置き時のRT残G/内部RT状態は `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ONのみ時のRT残G/内部状態は `UNVERIFIED`。
- gameCounterReset: 通常時ゲーム数天井は `NONE_CONFIRMED`。111/77/33/150GはRT継続G数であり天井ではない。
- ceilingAfterReset: リセット短縮天井・朝一専用天井 `NONE_CONFIRMED`。
- modeAfterReset: 朝一専用モード/設定変更専用振り分け `NONE_CONFIRMED`。
- stateAfterReset: ボーナス後RTは確認済みだが、設定変更/据え置き/電断時処理は `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目/ランプ差 `UNVERIFIED`。
- numericResetData: 公開朝一専用数値、短縮天井G、変更時モード振り分け等 `NONE_CONFIRMED`。

主要出典:
- プレイグラフ/Pマンズ 2007-10-16: https://p-mans.blogspot.com/2007/10/
- パチビー 2007年11月導入日: https://www.pachibee.jp/machines/schedule/2007-11
- P-WORLD: https://www.p-world.co.jp/machine/database/4959
- ヲタの記憶箱: https://kiokubako.blog.shinobi.jp/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/neo%E8%8A%B1%E7%89%A9%E8%AA%9E
- 5号機クロニクル: https://5goki.com/oizumi

取得日: 2026-09-01

## resetBehavior 遡及QA

### 電撃フランケン（2006-07-24）

- 既存性能コア判定を崩さず、v0.7 `resetBehavior` を追加済み。
- resetBehaviorQA: `PARTIAL`
- QA commit: `52efe06e28ac69d71c33207e4f0c74ddc326e892`
- ユニバーサル公式でBIG後RT `GHOST GAME` 150G、150Gで約85枚増加を確認。
- 後年解析DBで通常時ゲーム数天井「非搭載」を確認。
- 150Gは通常時ハマリ天井ではなくBIG後RT継続G数として分離。
- settingChangeBehavior: 設定変更時GHOST GAME残G/内部RT状態 `UNVERIFIED`。
- carryOverBehavior: 据え置き時RT残G/内部RT状態 `UNVERIFIED`。
- powerCycleBehavior: 電源OFF→ONのみ時RT残G/内部RT状態 `UNVERIFIED`。
- advantageousSectionReset: `NOT_APPLICABLE`。
- resetBenefits / resetPenalties: `NONE_CONFIRMED`。
- resetDetection: 本機固有ガックン/初期出目等 `UNVERIFIED`。
- numericResetData: 公開朝一専用数値 `NONE_CONFIRMED`。
- 二次資料のRT純増 `+0.6枚/G` と公式 `150Gで約85枚` は丸め差の可能性があるため、平均せず公式原数値を優先保持。

主要出典:
- ユニバーサル公式: https://www.universal-777.com/product/slot/dengeki_franken/
- みんスロ: https://minslo.com/%E9%9B%BB%E6%92%83%E3%83%95%E3%83%A9%E3%83%B3%E3%82%B1%E3%83%B3/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/63/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/4267

## 次回再開地点

1. **LATEST_HANDOFF基準196件地点から継続。**
2. 2007-11-12同日漏れを先に監査。パチビーでは同日に `華一番` も掲載されているため、main既存有無を確認し未登録なら時系列優先で処理する。
3. その後は2007-11-19 `スーパービンゴV` / `超お父さん2`、11-20 `哲也～雀聖と呼ばれた男～`、11-26 `赤ドン` / `ファイアーヒーローS` の既存有無と時系列を突合する。
4. `NEO花物語` は50枚ベースと設定別性能の第二ソース照合、resetBehavior直接資料が追加探索対象。
5. resetBehavior遡及QAは `電撃フランケン` より後の既存レコードを時系列で走査し、`resetBehavior`節未収集の最古機から継続する。
6. `トリプルクラウンS2-30` はmain既存を正として重複登録しない。納品9/17と後年10月表記、機械割の資料差は `CONFLICT` 維持。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断する。
8. 競合値は平均せず `CONFLICT`。別機種・兄弟スペック・後継機仕様は流用しない。