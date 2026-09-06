# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **801**
- latestMachineAddedByChronology: **パチスロ グラップラー刃牙 ～最大トーナメント編～**（ニューギン）
- latestRecord: `docs/real_machine_db/machines/2014-03-03_grappler-baki-max-tournament.md`
- chronologicalFrontier: **2014-03-03**
- schema: **resetBehavior v0.7**
- status: **2014-03-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-03-03_ngoropoposu.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は **recordCount 800 / chronologicalFrontier 2014-03-03 / 03-03群OPEN**。
- HANDOFF指定の次候補 **「パチスロ グラップラー刃牙 ～最大トーナメント編」（ニューギン）**を801件目として追加。
- 03-03同日群をK-Navi/HAZUSE/当時業界記事/具体日検索で再監査し、今回具体日を固定できた未登録パチスロは追加確認できなかった。処理済み3機で **2014-03-03_GROUP_CLOSED_FOR_CURRENT_RESEARCH** とする。
- 2017年七匠版「パチスロ グラップラー刃牙」のリセット800G天井・ベース41G/50枚等が検索で混入するため、2014年ニューギン版から明示的に分離した。
- 次の強い具体日アンカーとして **2014-03-10「ビッグボーナスX64」（タイヨー）**をHAZUSEで確認。03-04〜03-09を先に境界監査してから進む。

## 今回追加 — パチスロ グラップラー刃牙 ～最大トーナメント編～

### identity / 性能コア

- manufacturer: **ニューギン**。
- hall start: **2014-03-03**（PiDEA当時記事 / K-Navi）。
- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**。
- generation/system: **5号機 / ボーナス+ART / CZ / ループ型ゲーム数上乗せART**。
- payout: **97.9 / 99.8 / 101.5 / 103.9 / 106.3 / 111.6%**。
- ボーナス合成: **1/1489.5 / 1424.7 / 1365.3 / 1310.7 / 1260.3 / 1213.6**。
- ART初当たり: **1/265.4 / 255.8 / 246.5 / 235.3 / 221.2 / 191.3**。
- ボーナス+ART合成: **1/225.3 / 216.9 / 208.8 / 199.5 / 188.2 / 165.2**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。単一ユーザー実戦由来の約23G/1000円級言及は性能コアから除外。
- ART「グラップラーバトル」: **50G+α / 純増約2.0枚/G / 継続率約50～90%**。
- ボーナス基本獲得: **約80枚級**。
- 通常最大天井: **ボーナス・ART間1280G**。天井恩恵は **ART90%ループ確定**とする当時解析。
- recordStatus: **PARTIAL_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**（ベース・型式等の必須欠損を明示）。

### resetBehavior v0.7

- 設定変更: **ボーナス・ART間ハマリG RESET_CONFIRMED**。
- 設定変更時のモード/内部状態再抽選: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の天井G・モード・状態引継ぎ: **UNVERIFIED_AFTER_RESEARCH**。設定変更RESETの反対を推定しない。
- 設定変更なしの純電源OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更専用の朝一モード振り分け/当選率/高確率: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ガックン/初期出目/固定ステージ等の本機固有高信頼判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 2017年七匠版の「リセット時最大800G」は別機種のため2014年版へ流用しない。

## conflicts / safeguards

- ART初当たり設定6: 当時解析 **1/191.3** vs 後年5号機DB **1/165.2**。後者は当時解析の「ボーナス+ART合成」設定6と完全一致するため列定義/転記差の可能性があるが、推測修正せず **CONFLICT** として保持。
- 導入時期: 当時具体日資料 **2014-03-03** vs 後年一覧の月次 **2014/2**。本DBのhall startは具体日複数資料を優先。
- 2017年七匠版グラップラー刃牙の天井/リセット/ベース/初当たりを2014年ニューギン版へ混ぜない。
- 上乗せ特化ゾーン内部の詳細抽選は実機完全再現用のため性能コアへ入れない。

## 2014-03-03同日群 — CLOSED_FOR_CURRENT_RESEARCH

処理済み:
1. **パチスロ聖闘士星矢 黄金激闘編**（三洋物産） — 799件目。
2. **ンゴロポポス ～ピンチ！捕われの爺～**（大都技研） — 800件目。
3. **パチスロ グラップラー刃牙 ～最大トーナメント編～**（ニューギン） — 801件目。

監査結果:
- 03-03具体日でK-Navi/HAZUSE/業界記事/検索系統を横断。今回この3機以外の未登録パチスロを具体日付きで固定できず、現時点研究範囲ではCLOSED。
- 追加資料で03-03漏れが判明した場合は再OPENする。

## 遡及resetBehavior QA 進捗

- 旧カーソル `2007-01_karate-baka-ichidai.md` 直後の実作業順をGit commit lineageで再確認。
- 直後の機種レコードとして `2007-02_playboy.md` → `2007-02_playboy-30.md` が順次追加されていたことを確認。
- 両PLAYBOYレコードとも既に `resetBehavior` / `resetBehaviorQA: PARTIAL` を持ち、設定変更・据え置き・電源OFF→ON・天井・モード・状態・変更判別の再探索メモが保存済み。今回性能coreStatusは変更せず、**QA済みとしてカーソルを通過**。
- 次のQA対象は `docs/real_machine_db/machines/2007-02_pikaslo.md`。同レコードもresetBehavior PARTIALを持つことをコミット内容で事前確認済みのため、次回は現main実レコードを再読して追加資料の有無をQAする。
- reset QAは性能完了判定と別管理を維持。

## 次回再開地点

1. **recordCount 801 / chronologicalFrontier 2014-03-03 / 03-03群CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. **2014-03-04〜03-09境界監査**を行い、具体日付き未登録5号機があれば時系列順に追加。
3. 漏れがなければ、既知アンカー **2014-03-10「ビッグボーナスX64」（タイヨー / 型式ビッグボーナスX64A / 検定3S1100）**を802件目候補として性能コア+v0.7 resetBehavior収集。
4. 3月月次候補 **ジャックポットドリームプラス**（岡崎産業）等は具体導入日を別系統で固定して時系列へ挿入する。
5. 遡及QAは `2007-02_pikaslo.md` から継続。既存性能coreStatusは不用意に変更しない。
6. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）**を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### パチスロ グラップラー刃牙 ～最大トーナメント編～
- ニューギン / PR TIMES: `https://prtimes.jp/main/html/rd/p/000000001.000009222.html`
- PiDEA X 発表会: `https://www.pidea.jp/articles/%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%20%E3%82%B0%E3%83%A9%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%88%83%E7%89%99%EF%BD%9E%E6%9C%80%E5%A4%A7%E3%83%88%E3%83%BC%E3%83%8A%E3%83%A1%E3%83%B3%E3%83%88%E7%B7%A8%EF%BD%9E%E3%80%8D%E7%99%BA%E8%A1%A8%E4%BC%9A`
- 娯楽産業: `https://www.goraku-sangyo.com/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%B0%E3%83%A9%E3%83%83%E3%83%97%E3%83%A9%E3%83%BC%E5%88%83%E7%89%99/`
- K-Navi: `https://p-kn.com/slot/1996/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7296`
- スロパチクエスト: `https://www.slopachi-quest.com/kisyubetsu/baki/`
- 5号機クロニクル: `https://5goki.com/`

### 次アンカー
- HAZUSE ビッグボーナスX64: `https://hazuse.com/machine/pachislot/3S1100/`

### 遡及QA
- `docs/real_machine_db/machines/2007-02_playboy.md`
- `docs/real_machine_db/machines/2007-02_playboy-30.md`
- 次対象: `docs/real_machine_db/machines/2007-02_pikaslo.md`
