# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前進捗を再取得して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前HANDOFFは352件地点。既存352件を再追加せず、2009年3月前半〜3/29の残候補を具体日で再監査した。
- `ニューパルサー3` はALL7で **2009-06-01導入予定**を確認し、3月候補から除外。
- `スターマンアイズ` は当時グリーンべるとで **2009年3月下旬納品予定**までで具体日未確定。3/16以前へ推測挿入しない。
- `ジュードーズ` は2009年3月機であることは確認できるが、今回も具体納品/導入日を確定できず、推測配置しない。
- ALL7の2009年3月具体日一覧では、3/16後のパチスロ次候補は **2009-03-30「快盗天使ツインエンジェル2」**。3/17〜3/29に具体日付き未処理パチスロを確定できなかったため接続。
- 今回 **353「快盗天使ツインエンジェル2」** を追加。
- **既存353件の再追加禁止。**

## 350〜352（直前mainの継承）

- 350 `スクール☆ウォーズ` / 銀座 / 2009-03-16 / commit `2606adf3959ac1d483146e686b718efeae0edb11`
- 351 `マジカルハロウィンR` / KPE / 2009-03-16 / commit `61eb3a75db4f05e4c96257fbaab11d919308ec53`
- 352 `ドラキュラ` / NET / 2009-03-01遡及 / commit `3e9bf222191351eecc3104a66b50a02cddd5ae38`

## 353. 快盗天使ツインエンジェル2

record:
- `docs/real_machine_db/machines/2009-03-30_kaito-tenshi-twin-angel-2.md`

要点:
- manufacturer: サミー（Sammy）
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- releaseDate: 2009-03-30（ALL7導入予定・パチビー導入日）。2009年末マイナビニュースには「2009年4月にホール登場」表記があるため月表記差を注記。
- generation: 5号機
- systemType: ボーナス+RT / CZ / RTナビストック / 天井RT / 技術介入
- settings: 1 / 2 / 3 / 4 / 5 / 6
- 機械割: 96.8 / 98.8 / 100.9 / 103.2 / 108.0 / 111.8%。P-WORLD、5号機クロニクル、旧攻略資料で同系列を照合。
- H-BIG: 1/560.1 → 1/434.0
- N-BIG: 1/720.2 → 1/452.0
- MID: 1/541.6 → 1/383.3
- ボーナス合算: 1/199.2 → 1/140.3
- 基本獲得: H-BIG約255枚 / N-BIG約200枚 / MID約80枚
- RT「エンジェルタイム」: 33G/セット。
- RT純増は P-WORLD約+0.3〜0.5枚/G、パチビー約+0.5枚/G、パチスロ救急車約+0.6枚/Gで `CONFLICT`。平均しない。
- 50枚ベースは検索語・資料系統変更後も本機固有の比較可能値を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常救済: CZ/RTを除く通常側の999G到達後、ボーナス成立までCZ→RTをループする天井RT構造を確認。

### v0.7 resetBehavior

- settingChangeBehavior: **CONFIRMED**。設定変更で天井までのゲーム数をリセットし、RTナビストックも消滅。内部的にCZ「エンジェルチャレンジ」からスタート。
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`。据え置き時の天井カウンタ・ナビストック・CZ/RT状態を本機固有資料で確定できず。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。単純電源OFF→ONのみの場合のカウンタ・ナビストック・CZ/RT状態処理は未確定。
- gameCounterReset: `RESET_ON_SETTING_CHANGE_CONFIRMED`。
- ceilingAfterReset: 通常999G構造。設定変更専用の短縮天井は確認なし。
- modeAfterReset: `STARTS_IN_ANGEL_CHALLENGE_CZ_CONFIRMED`。
- stateAfterReset: ナビストック消滅は確認。高確/低確等のその他内部状態初期値は未確定。
- advantageousSectionReset: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- resetBenefits: 設定変更後CZスタート。通常CZの自力RT連チャン率33%はK-Naviにあるが、朝一専用率ではないため別定義で保持。
- resetPenalties: 前日保持のRTナビストックが設定変更で消滅。
- resetDetection: 朝一にRT突入リプレイ（リプレイ・リプレイ・羽根）または転落リプレイ（ベル・ベル・リプレイ）が早期出現した場合、設定変更の可能性が高いとする旧解析あり。ガックン/初期出目/ランプは `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一専用モード振分・朝一当選率・リセット恩恵発生率は確認なし。

主要出典（取得日 2026-09-02）:
- ALL7 / 2009年3月導入予定一覧 — INDUSTRY_SCHEDULE_DATABASE
  - https://www.all7.jp/plans/index/2009/03
- パチビー / 快盗天使ツインエンジェル2 — INDUSTRY_DATABASE
  - https://www.pachibee.jp/machines/reach/209080009
- グリーンべると / 萌え系パチスロ『ツインエンジェル』が再び登場 — INDUSTRY
  - https://news.p-world.co.jp/articles/3321/greenbelt
- P-WORLD / 快盗天使ツインエンジェル2 — INDUSTRY_DATABASE
  - https://www.p-world.co.jp/machine/database/5479
- K-Navi / 快盗天使ツインエンジェル2 — ANALYSIS_HIGH
  - https://p-kn.com/slot/927/
- K-Navi / エンジェルチャレンジ(CZ) — ANALYSIS_HIGH
  - https://p-kn.com/slot/927/9290/
- パチマガスロマガ / 快盗天使ツインエンジェル2 — ANALYSIS_HIGH
  - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/117/a.php
- ツインエンジェル2攻略 — ANALYSIS_SINGLE_CROSSCHECKED
  - https://twinangel.husuma.com/
- slot-navi / ツインエンジェル2解析・攻略 — ANALYSIS_SINGLE
  - https://slot-navi.com/10/twin-angel2/
- パチスロ救急車 / ツインエンジェル2 — OLD_ANALYSIS_SINGLE
  - https://www.eightbeat.com/slot99/kishu/ka_gyou/ka/twinE2/page_menu.html
- マイナビニュース / 2009年4月ホール登場表記 — CONTEMPORARY_MEDIA
  - https://news.mynavi.jp/article/20091218-a083/

commit:
- 353 快盗天使ツインエンジェル2: `1b7ec7f9a5a281582b8ae6a636b625acf5adc601`

## 2009年3月 境界監査

- 3/1 `タコスロ7R` は既存348。
- 3/1 `バトルアスリーテス大運動会` は既存349。
- 3/1 NET `ドラキュラ` は既存352（遡及）。
- 3/16 `スクール☆ウォーズ` は既存350。
- 3/16 `マジカルハロウィンR` は既存351。
- 3/30 `快盗天使ツインエンジェル2` は今回353。
- `ニューパルサー3` は2009-06-01へ送る。
- `スターマンアイズ` は3月下旬予定だが具体日未確定のため、月末境界監査で継続確認する。
- `ジュードーズ` は3月機だが具体日未確定。安全な具体日が得られた場合のみ正しい位置へ遡及追加する。

## resetBehavior遡及QA進捗

- **竹中直人のパチスロ太閤記（2006-09）** までv0.7化済み。
- 遡及QAは、竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機から継続する。
- 既存性能値を無駄にやり直さず、既にv0.7化済み機種は飛ばす。

## 次回再開地点

1. **LATEST_HANDOFF基準353件地点。既存353件の再追加禁止。**
2. **2009-03-30〜03-31同日/月末群を最終監査**し、`スターマンアイズ / ジュードーズ` を含む月単位候補に具体日が取れれば正しい位置へ遡及追加する。
3. 3月を閉じたら **2009年4月最古の具体日付き未処理パチスロ**へ進む。
4. 現時点で当時グリーンべるとから **山佐「夢花月」2009-04-05納品開始予定**を次月の有力具体日候補として確保済み。4/1〜4/4の未処理監査を先に閉じ、既存確認後に接続する。
5. 遡及QAは **竹中直人のパチスロ太閤記より後の最初のresetBehavior未補完機**から再開する。
6. 一般論、後継機、同名別メーカー機の値で推測補完しない。

## コミット

- 350 スクール☆ウォーズ: `2606adf3959ac1d483146e686b718efeae0edb11`
- 351 マジカルハロウィンR: `61eb3a75db4f05e4c96257fbaab11d919308ec53`
- 352 ドラキュラ（NET・遡及）: `3e9bf222191351eecc3104a66b50a02cddd5ae38`
- 353 快盗天使ツインエンジェル2: `1b7ec7f9a5a281582b8ae6a636b625acf5adc601`
