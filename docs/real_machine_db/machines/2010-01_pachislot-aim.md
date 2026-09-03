# パチスロエイム

machineName: パチスロエイム
manufacturer: オルカ
formalModelName: パチスロエイム
approvalNumber: 9S1053
releaseDate: 2010-01
generation: 5号機
systemType: RT
coreStatus: PARTIAL_AFTER_EXTENSIVE_RESEARCH

## chronologyNote

- 最新main 442件 / chronologicalFrontier 2010-01-12から、2010-01-13〜01-24境界候補を再監査。
- P-WORLD 2010年1月新台スケジュールと機種個別ページで、オルカ製「パチスロエイム」、型式名「パチスロエイム」、検定番号9S1053、5号機RT、導入開始2010年1月を確認。
- P-WORLD掲示板には2010-01-21時点の本機専用投稿が存在し、少なくとも同日までに一般ユーザーが機種を認知していたことは確認できるが、投稿日時をホール導入開始日へ格上げしない。
- 具体日を確定できないためreleaseDateは月精度のまま保持し、chronologicalFrontier 2010-01-12は進めない。
- 追加直前にrepo検索で未登録、想定パス404、LATEST_HANDOFF recordCount 442を再取得してリレー競合がないことを確認。

## payoutRateBySetting

**UNVERIFIED_AFTER_RESEARCH**

`パチスロエイム / エイム / オルカ / 9S1053 / 機械割 / 出玉率 / PAYOUT / 設定差` を組み替え、P-WORLD、旧機種一覧、回顧資料、当時系検索を横断したが設定別数値を確定できなかった。

confidence: UNVERIFIED

## initialHitBySetting

**UNVERIFIED_AFTER_RESEARCH**

`BIG / REG / ボーナス / 初当たり / 合算 / RT` を追加して再探索したが、比較可能な設定別確率を確定できなかった。

confidence: UNVERIFIED

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

`50枚 / 1000円 / ベース / コイン持ち / 回転数` を追加して再探索したが直接値を確定できなかった。

confidence: UNVERIFIED

## netIncrease

**UNVERIFIED_AFTER_RESEARCH**

P-WORLDは本機を「RT」に分類しているが、RT純増/Gの直接値は確定できなかった。RT分類だけから純増を推定しない。

confidence: UNVERIFIED

## basicPayout

**UNVERIFIED_AFTER_RESEARCH**

BIG/REG等の搭載構成・獲得枚数を、現存する直接資料では確定できなかった。

confidence: UNVERIFIED

## modeSpecificMinimumData

- P-WORLD分類: **5号機 / RT**。
- RTの突入条件、継続G数、ボーナス構成、天井の有無は今回の多段再探索でも直接確定できず。
- P-WORLDの機種情報本文は「備考 調査中」で、現存情報自体が極めて少ない。

confidence: INDUSTRY_DATABASE_FOR_CLASSIFICATION_ONLY

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。`設定変更 / リセット / 朝一`に機種名・型式・メーカーを組み合わせて再探索したが本機固有の直接資料を確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。`据え置き / 宵越し / ゲーム数`を追加して再探索したが、本機固有の保持・引継ぎ挙動を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。`電源OFF ON / 電断 / 復電`を追加して再探索したが、設定変更との差を示す直接資料を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時ゲーム数・RT関連カウンタ・天井カウンタの設定変更時処理を確定できず。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機の通常天井自体を直接確定できないため、リセット短縮の有無も推定しない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。朝一専用モード・モード再抽選/引継ぎを確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。RT状態その他の設定変更時・据え置き時処理を確定できず。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一/設定変更専用の公開恩恵は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみの公開不利要素は確認できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / リール / 初期出目 / ランプ / 液晶 / 変更判別`まで検索語を広げたが、本機固有の判別手段を確定できず。

numericResetData:
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: EXTENSIVE_RESEARCH_NO_DIRECT_RESET_DATA

## conflicts

- releaseDateはP-WORLDおよび現行機種相場DBで2010年1月まで一致するが、具体導入日は未確定。
- 本機について別機種・同名一般語「エイム」の検索ノイズが非常に大きいため、型式9S1053・オルカを併記しない資料は採用しない。

## missingFields

- payoutRateBySetting: UNVERIFIED_AFTER_RESEARCH
- initialHitBySetting: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- netIncrease: UNVERIFIED_AFTER_RESEARCH
- basicPayout: UNVERIFIED_AFTER_RESEARCH
- RT detailed basic performance: UNVERIFIED_AFTER_RESEARCH
- exact release date: UNVERIFIED_AFTER_RESEARCH
- resetBehavior except advantageousSectionReset: UNVERIFIED/NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. P-WORLD 個別機種ページ — https://www.p-world.co.jp/machine/database/5844 — メーカー オルカ、5号機RT、検定番号9S1053、型式名パチスロエイム、導入開始2010年1月、2010-01-21掲示板投稿の存在 — reliability: INDUSTRY_DATABASE
2. P-WORLD 2010年1月新台スケジュール — https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?type=Slot&year_month=2010-01 — 2010年1月パチスロ機としてオルカ「パチスロエイム」を掲載 — reliability: INDUSTRY_DATABASE
3. P-WORLD RT機種一覧 — https://www.p-world.co.jp/_machine/t_machine.cgi?aflag=&key=RT&mode=slot_type&start=100 — 本機をRT分類で掲載 — reliability: INDUSTRY_DATABASE
4. パチスロ実機相場ナビ — https://blog-pachislot.com/machines/1756.html — オルカ、型式パチスロエイム、5号機、導入日2010年01月の補助照合 — reliability: RETROSPECTIVE_DATABASE
