更新日: 2026-09-09

## 現在地点
- recordCount: **1064**
- latestRecordAdded: **パチスロ 機動戦士Zガンダム**（Bisty / ビスティ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-04-03_mobile-suit-z-gundam.md`
- chronologicalFrontier: **2017-04-03**
- frontierLatestMachine: **パチスロ 機動戦士Zガンダム — No.1064**
- schema: **resetBehavior v0.7**
- status: **2017-04-03_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1063実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを直近進捗正本として採用。
- 開始時mainは **1063件 / chronologicalFrontier 2017-04-03 / 2017-04-03_GROUP_OPEN**。次候補は「パチスロ 機動戦士Zガンダム」。
- No.1064として **パチスロ 機動戦士Zガンダム** を登録。
- HAZUSEで2017-04-03導入、型式 `パチスロ機動戦士ZガンダムS`、検定 `6S1412` を固定。SANKYO公式オンライン博物館で2017.04導入・ビスティブランド・ART初期40G以上・純増約1.7枚/Gを確認。
- 性能コアは複数解析で設定別機械割、BB/CB/合算、ART初当たり、約33G/50枚を照合。
- resetBehaviorは一撃の直接比較に加え、pachislo-data・期待値見える化で後発補完。設定変更=777G天井RESET/内部状態RESELECT、純電源OFF→ON=天井・内部状態CARRYOVER、開始ステージ=フォン・ブラウン。
- 設定変更時/ART終了時のスルー回数天井選択率を公開朝一数値として収録。pachislo-data 0〜9表記と一撃1〜10表記は数値系列が同一のため、CONFLICTではなくカウント表示定義差として保持。
- 設定変更時の低確/高確/超高確の具体的振り分け率は検索語・資料系統を変えて再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

## No.1064 — パチスロ 機動戦士Zガンダム
- manufacturer: **Bisty（ビスティ）**
- releaseDate: **2017-04-03**
- formalModelName: **パチスロ機動戦士ZガンダムS**
- certificationNumber: **6S1412**
- generation/system: **5号機 / A+ART / ボーナス経由ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.9 / 99.8 / 102.2 / 105.7 / 108.4 / 111.0%**。
- BB: **1/595.8 全設定共通**。
- CB: **1/182.6 / 181.0 / 176.6 / 170.7 / 168.5 / 165.9**。
- ボーナス合算: **1/139.7 / 138.8 / 136.2 / 132.7 / 131.3 / 129.8**。
- ART初当たり: **1/429.7 / 418.2 / 387.6 / 349.6 / 318.9 / 297.9**（一部資料の設定6 1/298.0は丸め差）。
- 50枚ベース: **約33G**。別解析に設定別33.3〜34.6Gあり。
- ART単体純増: **約1.3枚/G**、ボーナス込み: **約1.7枚/G**。
- BB/CB基本獲得: **約56枚**、ART初期 **40G以上**。

### resetBehavior v0.7
- 通常時777G天井: **設定変更RESET / 据え置き・純電断CARRYOVER**。
- 固定のリセット短縮ゲーム数天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 内部状態: **設定変更RESELECT / 純電断CARRYOVER**。
- 開始ステージ: **フォン・ブラウン**。設定変更/純電断で同じためステージ単独判別不可。
- ガックン判別: 当時解析で **不可**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 設定変更時/ART終了時にスルー回数天井を再選択。内部スルー回数0〜9の設定別振り分けをレコードへ保存。
- 設定変更時内部状態の具体的低確/高確/超高確率: **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData — スルー回数天井選択率（設定変更時/ART終了時）
- 設定1: **12.6 / 1.2 / 1.2 / 2.4 / 3.9 / 0 / 12.6 / 21.3 / 3.2 / 41.7%**（内部0〜9スルー）。
- 設定2: **13.0 / 1.6 / 1.6 / 2.8 / 4.7 / 0 / 13.0 / 22.1 / 3.2 / 38.2%**。
- 設定3: **13.8 / 2.0 / 2.0 / 3.2 / 5.9 / 0 / 13.8 / 23.2 / 3.2 / 33.1%**。
- 設定4: **13.4 / 2.8 / 2.8 / 4.7 / 7.1 / 0 / 14.2 / 26.8 / 3.2 / 25.2%**。
- 設定5: **15.0 / 3.5 / 3.5 / 5.9 / 8.3 / 0 / 14.6 / 31.1 / 3.2 / 15.0%**。
- 設定6: **15.4 / 4.3 / 4.3 / 7.1 / 9.5 / 2.0 / 15.4 / 33.9 / 3.2 / 5.1%**。
- 一撃は同じ系列を1〜10回表記。数値一致のため `INDEXING_DEFINITION_DIFFERENCE`。

### dataQuality / conflicts
- material numeric conflict: **NONE_CONFIRMED**。
- ART純増は公式約1.7枚/Gと解析単体約1.3枚/G・ボーナス込み約1.7枚/Gの定義差。平均せず定義を分離。
- 一撃の2017-04-01時点では状態等「現在調査中」だが、後発当時解析2系統で状態再抽選/引継ぎとステージが一致。数値競合ではなく公開時点差として補完。

## 2017-04-03群監査
- status: **OPEN**。
- 登録済み:
  1. **ドキドキマンゴー-30 — No.1062**。
  2. **ドキドキマンゴー-25 — No.1063**。
  3. **パチスロ 機動戦士Zガンダム — No.1064**。
- 次未処理候補:
  1. **恵比寿マスカッツ** — ニューギン。複数解析で2017-04-03導入確認済み。
- 恵比寿マスカッツ処理後、2017-04-03群を全メーカー横断監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05_gold-shio-30.md`。
- 今回は時系列本線を優先し、遡及QAカーソルは変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1064を再取得。
2. **1064件 / chronologicalFrontier 2017-04-03 / 4/3群OPEN** を正本として継続。
3. 次の未処理候補 **「恵比寿マスカッツ」**（ニューギン）をNo.1065候補として性能コア＋resetBehavior v0.7で処理。
4. 続いて4/3同日全メーカー監査を実施し、CLOSED可否を判定。漏れがあれば時系列順に処理する。
5. 遡及QAは `2006-05_gold-shio-30.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1064 パチスロ 機動戦士Zガンダム
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/886/
- HAZUSE: https://hazuse.com/machine/pachislot/6S1412/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_zgundam/3/
- 一撃 スルー回数天井: https://1geki.jp/slot/s_zgundam/64/
- pachislo-data: https://pachislo-data.com/bisty/34910
- 期待値見える化: https://slotjin.com/zone/zgundam/
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/32863/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/2920/1/61966

### 次候補 — 恵比寿マスカッツ
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/34518/

### 遡及QA 次カーソル
- `docs/real_machine_db/machines/2006-05_gold-shio-30.md`
