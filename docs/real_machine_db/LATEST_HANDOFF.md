# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **798**
- latestMachineAddedByChronology: **アナザーゴッドハーデス-奪われたZEUSver.-**（ミズホ）
- latestRecord: `docs/real_machine_db/machines/2014-02-24_another-god-hades-stolen-zeus.md`
- chronologicalFrontier: **2014-02-24**
- schema: **resetBehavior v0.7**
- status: **2014-02-24_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2014-02-17_jackpot-yama.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は **recordCount 797 / chronologicalFrontier 2014-02-17 / 02-17群OPEN**。
- 前handoff最優先候補 **「吉宗～極～」**を精査。2014-02-17は東京・千葉の限定/大都直営系の試験導入として当時資料に残る一方、一般解析DB・型式DBの全国ホール導入は **2015-06-08**、型式 **ヨシムネH2A4 / 3S1093**。
- さらに2014年試験導入当時の公開「ボーナス+AT」値（設定1 1/335等）と、2015年量産版の公表値（設定1 1/318.7等）が一致しない。2014年試験機の正式型式を今回独立固定できなかったため、**2014-02-17本線へ798件目として登録しない**。2015-06-08到達時に量産版を正式収集し、2014試験導入履歴をidentity/conflict注記として残す。
- 02-18〜02-23境界を検索したが、今回新たな具体日付き未登録5号機を固定できず。
- 次の強い具体日アンカー **2014-02-24「アナザーゴッドハーデス-奪われたZEUSver.-」**を798件目として追加。

## 今回追加 — アナザーゴッドハーデス-奪われたZEUSver.-

### identity / 性能コア

- manufacturer: **ミズホ / UNIVERSAL ENTERTAINMENT**。
- hall start: **2014-02-24**（HAZUSE / Pachiseven）。ユニバーサル公式は2014年2月発売。
- 型式: **アナザーゴッドハーデス-X**。
- 検定番号: **3S0800**。
- generation/system: **5号機 / AT / ゲーム数上乗せ / CZ HELL ZONE**。
- payout: **97.23 / 99.82 / 102.78 / 106.30 / 111.12 / 116.30%**。
- AT初当たり: **1/459.44 / 416.81 / 408.67 / 330.91 / 327.11 / 252.94**。
- baseGamesPer50: **約28G/50枚**。
- netIncrease: **約2.9枚/G**。
- GOD揃い: **1/8192**、GG100G + JUDGMENT 3個以上。
- 天井: **GG後1570G + 最大前兆30G（実質最大1600G）**、到達時PREMIUM OF HADES確定。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更: **天井G RESET / 表モード再抽選 / 裏モード・HELL ZONE状態再抽選**。
- 電源OFF→ONのみ: **天井G・内部モードKEEP**を当時解析で確認。HELL ZONE状態KEEPは後年複数整理資料で補強。
- 朝一見た目は設定変更・電源OFF→ONとも **アケロン / 液晶1・2・3**で、これ単独では判別不能。
- 設定変更時の表モード振り分けを全設定分取得。低確A/B・冥界・通常・天国準備・天国A/Bへ再抽選、超天国直接移行なし。
- 朝一の奇数テンパイ・鎖演出・液晶ざわつきは設定変更時に発生しやすいという資料があり、**PROBABILISTIC_MORNING_ACTIVITY**として保存。確定判別にはしない。
- 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有ガックンは十分な再探索後も **UNVERIFIED_AFTER_RESEARCH**。

## conflicts / safeguards

- 2018年「冥王召喚」、2023年「解き放たれし槍撃ver.」を2014年初代ハーデスへ混入しない。後者の1400G天井・有利区間・朝一ヘルグレイヴ等は別仕様。
- 一部後年サイトに機械割97.43〜115.82%等の異値がある。本線はHAZUSEと2014年当時解析が一致する97.23〜116.30%を採用。
- 「吉宗～極～」は2014-02試験導入と2015-06全国量産導入を混同しない。2014試験時の公開初当たりと2015量産値に差があり、今回2014独立レコード化を見送った。

## 2014-02-17同日群 — CLOSED

処理済み:
1. **クイーンオアシス**（パイオニア） — 796件目。
2. **ジャックポット**（ヤーマ） — 797件目。

境界注記:
- **吉宗～極～**（大都技研）: 2014-02-17に東京・千葉/直営系限定試験導入資料あり。ただし全国量産版は2015-06-08、型式ヨシムネH2A4。試験時スペック値にも差があるため、2014本線の独立量産機としては登録しない。2015-06到達時に正式処理。

## 2014-02-24同日群 — OPEN

処理済み:
1. **アナザーゴッドハーデス-奪われたZEUSver.-**（ミズホ） — 798件目。

未処理/要確認:
1. 02-24をメーカー横断で再監査し、同日導入の未登録パチスロがないか確認してからCLOSED判定。
2. 漏れがなければ次の強いアンカー **2014-03-03「パチスロ聖闘士星矢 黄金激闘編」**（三洋）へ進む。
3. 2014年3月には **ビッグボーナスX64**（タイヨー）、**ジャックポットドリームプラス**（岡崎産業）等の月次候補があるため、具体導入日を固定して時系列へ挿入する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線798件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 798 / chronologicalFrontier 2014-02-24 / 02-24群OPEN** から開始。
2. 2014-02-24同日全メーカー監査を完了し、未登録機があれば時系列順に追加。
3. 02-24群を閉じた後、02-25〜03-02境界監査。
4. 漏れがなければ **2014-03-03「パチスロ聖闘士星矢 黄金激闘編」**を799件目候補として性能コア + v0.7 resetBehavior収集。
5. 3月月次候補「ビッグボーナスX64」「ジャックポットドリームプラス」等は具体日を別系統で固定してから追加。
6. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）**を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録。
7. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。

## 主要出典 — 取得日 2026-09-06

### アナザーゴッドハーデス-奪われたZEUSver.-
- ユニバーサル公式: `https://www.universal-777.com/product/slot/hades/`
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0800/`
- Pachiseven: `https://pachiseven.jp/machines/3000/cutout/131`
- 2014年当時設定差解析: `https://www.slopachi-quest.com/article/anothergod-hades-settei/`
- K-Navi設定変更時モード移行率: `https://p-kn.com/slot/1997/48918/`
- 当時天井/設定変更解析: `https://slot-sokuhou777-777.seesaa.net/article/403145911.html`
- CrankySeven: `https://crankyseven.com/anothergodhades-pc.htm`
- 朝一変更判別回顧: `https://moge-site.com/archives/2154`

### 吉宗～極～境界判定
- 2014年2月限定版 パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/57/a.php`
- 2014-02-17当時記事: `https://pachinkopachisro.com/archives/36439339.html`
- 2015量産版 HAZUSE: `https://hazuse.com/machine/pachislot/3S1093/`
- 2015量産版 K-Navi: `https://p-kn.com/slot/2272/`
- 全国発売文脈: `https://crankyseven.com/sp/yoshimune-kyoku1-pc.htm`

### 次候補
- K-Navi 聖闘士星矢 黄金激闘編: `https://p-kn.com/slot/2000/`
- HAZUSE 聖闘士星矢 黄金激闘編: `https://hazuse.com/machine/pachislot/3S1130/`
